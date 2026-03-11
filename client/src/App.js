import './App.css';
import { useEffect, useState } from "react";
import PostCard from './components/PostCard';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  console.log(posts)

  return (
    <main className="container">
      <h1 className="pageTitle">Blog</h1>

      <section className="posts">
        {posts.map((post) => (
          <PostCard post={post}></PostCard>
        ))}
      </section>
    </main>
  );
}

export default App;
