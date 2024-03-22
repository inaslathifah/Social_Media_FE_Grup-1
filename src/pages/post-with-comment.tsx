import Layout from "@/components/layout";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { getPostWithID } from "@/utils/apis/post/api";
import { IComments, IPostWithComments } from "@/utils/apis/post/type";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

export default function PostWithComment() {
  const [post, setPost] = useState<IPostWithComments<IComments[]>>();
  const params = useParams();

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    try {
      const result = await getPostWithID(params.postID!);
      setPost(result.data);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Layout withUser navBlue centerX>
      {post && (
        <Card className="w-full p-2 text-sm rounded-xl bg-white border border-sky-300 shadow-md shadow-slate-300 mb-5">
          <CardContent className="p-2 text-xs">
            <div className="w-full my-2">
              <img
                src={post.image}
                alt="Image"
                className="rounded-md object-cover"
              />
            </div>

            <div className="w-full">
              <p className="text-lg font-medium">@{post.username}</p>
            </div>
            <div className="w-full mb-2">
              <p className="text-[0.7rem] font-ligh text-slate-500 tracking-wide">
                {dayjs(post.created_at).format("HH:MM - DD MMMM YYYY")}
              </p>
            </div>
            <div className="w-full mb-2">
              <p className="text-base tracking-wide text-slate-800 leading-5 text-start">
                {post.caption}
              </p>
            </div>

            <Separator className="my-3" />

            <div className="w-full mb-2">
              <p className="text-xs text-slate-400">Comments :</p>
            </div>

            {post.comments.map((comment, i) => (
              <div key={i} className="w-full bg-slate-100 rounded-md p-4 mb-2">
                <div className="w-full mb-1">
                  <p className="text-sm font-medium">@{comment.Username}</p>
                </div>
                <div className="w-full mb-1">
                  <p className="text-[0.6rem] font-ligh text-slate-500 tracking-wide">
                    {dayjs(comment.CreatedAt).format("HH:MM - DD MMMM YYYY")}
                  </p>
                </div>
                <div className="w-full mb-1">
                  <p className="text-sm tracking-wide text-slate-800 leading-5 text-start">
                    {comment.Comment}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </Layout>
  );
}
