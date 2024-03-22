import nophoto from "@/assets/no-photo.png";
import Layout from "@/components/layout";
import PostCard from "@/components/post-card";
import CreatePost from "@/components/create-post";
import { BioProfile } from "@/components/bio-profile";
import { useEffect, useState } from "react";
import {
  createPost,
  deletePost,
  getAllPosts,
  // updatePost,
} from "@/utils/apis/post/api";
import { toast } from "sonner";
import { IPost, createPostType } from "@/utils/apis/post/type";
import { useToken } from "@/utils/contexts/token";
import { CommentType } from "@/utils/apis/comment/type";
import { createComment } from "@/utils/apis/comment/api";

function ProfilePage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { user } = useToken();

  useEffect(() => {
    user && fetchPost();
  }, [user]);

  async function fetchPost() {
    try {
      const result = await getAllPosts({ username: user?.username });
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

  // async function handleUpdate(body: createPostType, postID: number) {
  //   try {
  //     const result = await updatePost(body, postID);
  //     toast(result.message);
  //   } catch (error) {
  //     toast((error as Error).message.toString());
  //   }
  // }

  return (
    <Layout withUser navBlue centerX>
      <BioProfile
        fullname={user?.fullname}
        username={user?.username}
        biodata={user?.biodata}
        totalPost={posts.length}
      />

      <CreatePost onsubmit={(data) => addPost(data)} />

      {posts.map((post) => (
        <PostCard
          key={post.id}
          postID={post.id}
          username={post.username}
          caption={post.caption}
          time={post.created_at}
          imgUrl={post.image ? post.image : nophoto}
          onComment={(data) => addComment(data)}
          onDelete={(postID) => handleDelete(postID)}
          // onUpdate={(body, postID) => handleUpdate(body, postID)}
          withOption
        />
      ))}
    </Layout>
  );
}

export default ProfilePage;
