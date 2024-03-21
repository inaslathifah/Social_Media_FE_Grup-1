import { Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IPost } from "./type";

export async function getAllPosts() {
  try {
    const response = await axiosWithConfig.get("/posts");

    return response.data as Response<IPost[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export async function getPostWithID(postID: string) {
  try {
    const response = await axiosWithConfig.get(`/posts/${postID}`);

    return response.data as Response<IPost>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}
