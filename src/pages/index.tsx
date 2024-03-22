import Layout from "@/components/layout";
import PostCard from "@/components/post-card";
import CreatePost from "@/components/create-post";
import { useEffect, useState } from "react";

import { createPost, getAllPosts } from "@/utils/apis/post/api";
import { toast } from "sonner";
import { IPost, createPostType } from "@/utils/apis/post/type";
import { Separator } from "@/components/ui/separator";

export async function addPost(data: createPostType) {
  try {
    const result = await createPost(data);
    toast(result.message);
  } catch (error) {
    toast((error as Error).message);
  }
}

function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

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
          imgUrl={post.image}
          postID={post.id}
          
          withOption
          withInputComment
        />
      ))}
    </Layout>
  );
}

export default Home;
