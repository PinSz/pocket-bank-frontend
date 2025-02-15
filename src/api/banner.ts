import { AxiosError } from "axios";
import { ResponseBannerData } from "@/type/banner";
import axiosInstance from "./client";

export const fetchBanner = async (userId: string): Promise<ResponseBannerData | null> => {
  try {
    const { data } = await axiosInstance.get(`/api/banner/${userId}`);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("Error fetching banner:", axiosError);
    return { status: axiosError.status };
  }
};
