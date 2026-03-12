import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <h1 className="pageTitle">Blog</h1>

      <section className="posts">
        {posts.map((post) => (
          <PostCard post={post}></PostCard>
        ))}
      </section>
    </>
  )
}

export default Home