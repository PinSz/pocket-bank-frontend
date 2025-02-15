import { AxiosError } from "axios";
import { ResponseTransactionData } from "@/type/transactions";
import axiosInstance from "./client";

export const fetchTransaction = async (userId: string): Promise<ResponseTransactionData | null> => {
  try {
    const { data } = await axiosInstance.get(`/api/transactions/${userId}`);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("Error fetching Transaction:", axiosError);
    return { status: axiosError.status };
  }
};
