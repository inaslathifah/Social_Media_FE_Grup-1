import { Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";

export async function createComment() {
  try {
    const result = await axiosWithConfig.post("/comments");

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
