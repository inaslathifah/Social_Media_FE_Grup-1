import Layout from "@/components/layout";
// import PostCard from "@/components/post-card";
import CreatePost from "@/components/create-post";
import { BioProfile } from "@/components/bio-profile";
import { addPost } from ".";

function ProfilePage() {
  return (
    <Layout withUser navBlue centerX>
      <BioProfile />
      <CreatePost onsubmit={(data) => addPost(data)} />
      {/* <PostCard imgUrl={amperaImage} withOption />
      <PostCard /> */}
    </Layout>
  );
}

export default ProfilePage;
