import { useEffect, useState } from "react";
import nophoto from "@/assets/no-photo.png";
import Layout from "@/components/layout";
import { Separator } from "@/components/ui/separator";
import PostCard from "@/components/post-card";
import CreatePost from "@/components/create-post";
import { toast } from "sonner";

import { createPost, deletePost, getAllPosts } from "@/utils/apis/post/api";
import { IPost, createPostType } from "@/utils/apis/post/type";
import { createComment } from "@/utils/apis/comment/api";
import { CommentType } from "@/utils/apis/comment/type";
import { useToken } from "@/utils/contexts/token";

function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { user } = useToken();

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    try {
      const result = await getAllPosts();
      setPosts(result.data);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  async function addPost(data: createPostType) {
    try {
      const result = await createPost(data);
      toast(result.message);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  async function addComment(data: CommentType) {
    try {
      const result = await createComment(data);
      toast(result.message);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  async function handleDelete(postID: number) {
    try {
      const result = await deletePost(postID);
      toast(result.message);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Layout withUser navBlue centerX>
      <CreatePost onsubmit={(data) => addPost(data)} />

      <Separator className="mb-7 h-1" />

      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          caption={post.caption}
          time={post.created_at}
          imgUrl={post.image ? post.image : nophoto}
          postID={post.id}
          withOption={post.username === user?.username}
          withInputComment
          onComment={(data) => addComment(data)}
          onDelete={(postID) => handleDelete(postID)}
          // onUpdate={() => {}}
        />
      ))}
    </Layout>
  );
}

export default Home;
