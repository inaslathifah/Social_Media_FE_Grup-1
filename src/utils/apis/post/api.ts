import { ResponseData, Response, Request } from "@/utils/types/api";
import axiosWithConfig from "../axios-with-config";
import { IComments, IPost, IPostWithComments, createPostType } from "./type";
import { checkProperty, valueFormatData } from "@/utils/formatter";

export async function getAllPosts(params?: Request) {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];

      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }

    const url = query ? `/posts?${query}` : "/posts";
    const response = await axiosWithConfig.get(url);

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
    const formData = new FormData();

    let key: keyof typeof body;
    for (key in body) {
      if (checkProperty(body[key])) {
        formData.append(key, valueFormatData(body[key]));
      }
    }

    const response = await axiosWithConfig.put(`/posts/${postID}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export async function deletePost(postID: number) {
  try {
    const response = await axiosWithConfig.delete(`/posts/${postID}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}
