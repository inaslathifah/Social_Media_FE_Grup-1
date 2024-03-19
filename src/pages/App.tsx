import Layout from "@/components/layout";
import PostCard from "@/components/post-card";
import amperaImage from "@/assets/amperaori.jpg";
import CreatePost from "@/components/create-post";

function App() {
  return (
    <Layout withUser bgBlue centerX>
      <CreatePost />
      <PostCard imgUrl={amperaImage} withOption />
      <PostCard />
    </Layout>
  );
}

export default App;
