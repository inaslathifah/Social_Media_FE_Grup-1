import Layout from "@/components/layout";
// import PostCard from "@/components/post-card";
import CreatePost from "@/components/create-post";
// import amperaImage from "@/assets/amperaori.jpg";
import { BioProfile } from "@/components/bio-profile";

function ProfilePage() {
  return (
    <Layout withUser navBlue centerX>
      <BioProfile />
      <CreatePost />
      {/* <PostCard imgUrl={amperaImage} withOption />
      <PostCard /> */}
    </Layout>
  );
}

export default ProfilePage;
