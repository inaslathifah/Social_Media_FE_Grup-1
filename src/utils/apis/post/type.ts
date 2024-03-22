import { z } from "zod";

const MAX_MB = 2;
const MAX_UPLOAD_SIZE = 1024 * 1024 * MAX_MB;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const createPostSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => file.name !== "", "Share your moment with an image")
    .refine(
      (file) => file.size <= MAX_UPLOAD_SIZE,
      `Max image size is ${MAX_MB}MB`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, and .png formats are supported"
    ),
  caption: z.string().min(1, { message: "Type some words" }),
});

export type createPostType = z.infer<typeof createPostSchema>;

export interface IPost {
  id: number;
  username: string;
  created_at: string;
  image: string;
  caption: string;
}

export interface IPostWithComments<C = []> {
  id: number;
  username: string;
  created_at: string;
  image: string;
  caption: string;
  comments: C;
}

export interface IComments {
  ID: number;
  CreatedAt: string;
  Username: string;
  PostId: number;
  Comment: string;
}
