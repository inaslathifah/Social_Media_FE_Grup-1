import Layout from "@/components/layout";
import PostCard from "@/components/post-card";
// import amperaImage from "@/assets/amperaori.jpg";
import CreatePost from "@/components/create-post";
import { useEffect, useState } from "react";

import { getAllPosts } from "@/utils/apis/post/api";
import { toast } from "sonner";
import { IPost } from "@/utils/apis/post/type";

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
      <CreatePost />
      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          caption={post.caption}
          time={post.created_at}
          imgUrl={post.image}
          withOption
          withInputComment
        />
      ))}
    </Layout>
  );
}

export default Home;
