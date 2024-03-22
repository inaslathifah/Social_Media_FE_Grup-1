import { z } from "zod";

export const commentSchema = z.object({
  post_id: z.string(),
  comment: z.string(),
});

export type CommentType = z.infer<typeof commentSchema>;
