"use server";

import { axiosInstance } from "@/src/lib/axiosInstence";
import { ApiError } from "@/src/lib/Error/ApiError";
import { IServerResponse } from "@/src/types";
import { IAuthData } from "@/src/types/authType";
import { jwtDecode } from "jwt-decode";

import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { IUser } from "@/src/types/user";

export const registerServices = async (
  userData: FieldValues
): Promise<IServerResponse<IAuthData>> => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);
    const cookieStore = await cookies();
    cookieStore.set("accessToken", data.data.accessToken);
    cookieStore.set("refreshToken", data.data.refreshToken);
    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const err = error as AxiosError<any>;
    if (err.response) {
      const ErrorData = err.response.data;
      throw new ApiError(
        ErrorData.statusCode,
        ErrorData.message,
        ErrorData.errorSources
      );
    }
    throw new ApiError(500, "Internal server error");
  }
};

export const loginServices = async (
  userData: FieldValues
): Promise<IServerResponse<IAuthData>> => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    const cookieStore = await cookies();
    cookieStore.set("accessToken", data.data.accessToken);
    cookieStore.set("refreshToken", data.data.refreshToken);
    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const err = error as AxiosError<any>;
    if (err.response) {
      const ErrorData = err.response.data;
      throw new ApiError(
        ErrorData.statusCode,
        ErrorData.message,
        ErrorData.errorSources
      );
    }
    throw new ApiError(500, "Internal server error");
  }
};

export const logOutUser = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
};

export const getCurrentUser = async (): Promise<IUser | null> => {
  const token = (await cookies()).get("accessToken")?.value;
  let decode = null;
  if (token) {
    decode = await jwtDecode(token);
    return {
      _id: decode._id,
      name: decode.name,
      email: decode.email,
      mobileNumber: decode.mobileNumber,
      role: decode.role,
      status: decode.status,
      profilePhoto: decode.profilePhoto,
    };
  }
  return decode;
};
