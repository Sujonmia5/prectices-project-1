import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "../services/authServices";
import { IUser } from "../types/user";

export interface IUserProviderProps {
  children: ReactNode;
}
interface IContext {
  user: IUser | null;
  userLoading: boolean;
  setUserLoading: Dispatch<React.SetStateAction<boolean>>;
  setUser: Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext<IContext | undefined>(undefined);

function UserContextProvider({ children }: IUserProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);

  const userHandle = async () => {
    const userData = await getCurrentUser();
    setUser(userData);
    setUserLoading(false);
  };

  useEffect(() => {
    userHandle();
  }, [userLoading]);

  const value = {
    user,
    setUser,
    userLoading,
    setUserLoading,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }
  return context;
};
