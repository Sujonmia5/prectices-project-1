import { useMutation } from "@tanstack/react-query";
import { loginServices, registerServices } from "../services/authServices";
import { FieldValues } from "react-hook-form";
import { IServerResponse } from "../types";
import { IAuthData } from "../types/authType";
import { toast } from "sonner";

export const useUserLogin = () => {
  return useMutation<IServerResponse<IAuthData>, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginServices(userData),
    onSuccess: ({ data }) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error.message || "Something went worng");
    },
  });
};

export const useUserRegistration = () => {
  return useMutation<IServerResponse<IAuthData>, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (data: FieldValues) => await registerServices(data),
    onSuccess: ({ data }) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
