import axiosWithConfig from "@/utils/apis/axios-with-config";
import { Response, ResponseData } from "@/utils/types/api";
import { LoginType, RegisterType } from "./type";

interface LoginPayload {
  created_at: string;
  updated_at: string;
  fullname: string;
  username: string;
  handphone: string;
  email: string;
  biodata: string;
  token: string;
}

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axiosWithConfig.post("/login", body);

    return response.data as ResponseData<LoginPayload>;
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const userRegister = async (body: RegisterType) => {
  try {
    const response = await axiosWithConfig.post("/users", body);
    console.log(response);
    return response.data as Response;
  } catch (error: any) {
    throw Error(error.message);
  }
};
