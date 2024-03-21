import Layout from "@/components/layout";
import PostCard from "@/components/post-card";
import amperaImage from "@/assets/amperaori.jpg";
import CreatePost from "@/components/create-post";

function Home() {
  return (
    <Layout withUser navBlue centerX>
      <CreatePost />
      <PostCard imgUrl={amperaImage} withOption withInputComment />
      <PostCard />
    </Layout>
  );
}

export default Home;
