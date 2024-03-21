import { Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IProfile } from "./type";

export const getProfile = async () => {
  try {
    const response = await axiosWithConfig.get("/users");

    return response.data as Response<IProfile>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
