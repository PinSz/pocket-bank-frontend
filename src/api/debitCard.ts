import { AxiosError } from "axios";
import axiosInstance from "./client";
import { IUserRequest } from "@/type/request";
import { ResponseDebitCardData } from "@/type/debitCard";

export const fetchDebitCard = async (value: IUserRequest): Promise<ResponseDebitCardData | null> => {
  try {
    const { data } = await axiosInstance.post(
      "/api/debit-card/info",
      value
    );
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("Error fetching DebitCard:", axiosError);
    return { status: axiosError.status };
  }
};
