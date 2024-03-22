import { ResponseData } from "@/utils/types/api";
import axiosWithConfig from "../axios-with-config";
import { IProfile } from "./type";

export async function getProfile() {
  try {
    const response = await axiosWithConfig.get("/users");

    return response.data as ResponseData<IProfile>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export async function deleteUser(idUser: string) {
  try {
    const response = await axiosWithConfig.delete(`/users/${idUser}`);

    return response.data as ResponseData;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}
