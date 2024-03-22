import { CommentType } from "./type";
import { Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";

export async function createComment(data: CommentType) {
  try {
    const result = await axiosWithConfig.post("/comments", data);

    return result.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export async function deleteComment(commentID: string) {
  try {
    const response = await axiosWithConfig.delete(`/comments/${commentID}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}
