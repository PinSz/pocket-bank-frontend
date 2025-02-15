import { AxiosError } from "axios";
import { ResponseUserData } from "@/type/user";
import axiosInstance from "./client";

export const fetchUser = async (userId: string): Promise<ResponseUserData | null> => {
  try {
    const { data } = await axiosInstance.get(`/api/user/${userId}`);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("Error fetching user:", axiosError);
    return { status: axiosError.status };
  }
};
