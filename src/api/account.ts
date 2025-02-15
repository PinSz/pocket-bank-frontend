import { AxiosError } from "axios";
import axiosInstance from "./client";
import { IUserRequest } from "@/type/request";
import { ResponseAccountData } from "@/type/account";

export const fetchAccountDetail = async (value: IUserRequest): Promise<ResponseAccountData | null> => {
  try {
    const { data } = await axiosInstance.post(
      "/api/account/details",
      value
    );
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("Error fetching AccountDetail:", axiosError);
    return { status: axiosError.status };
  }
};
