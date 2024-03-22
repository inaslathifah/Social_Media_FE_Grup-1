import { ResponseData, Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IComments, IPost, IPostWithComments, createPostType } from "./type";
import { checkProperty, valueFormatData } from "@/utils/formatter";

export async function getAllPosts() {
  try {
    const response = await axiosWithConfig.get("/posts");

    return response.data as ResponseData<IPost[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export async function getPostWithID(postID: string) {
  try {
    const response = await axiosWithConfig.get(`/posts/${postID}`);

    return response.data as ResponseData<IPostWithComments<IComments[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export const createPost = async (body: createPostType) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;
    for (key in body) {
      if (checkProperty(body[key])) {
        formData.append(key, valueFormatData(body[key]));
      }
    }

    const response = await axiosWithConfig.post("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.message);
  }
};

export async function updatePost(body: createPostType, postID: number) {
  try {
  } catch (error) {}
}

export async function deleteUser(postID: string) {
  try {
    const response = await axiosWithConfig.delete(`/posts/${postID}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}
