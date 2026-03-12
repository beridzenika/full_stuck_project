import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

function Post() {
  let { id } = useParams();


  const [post, setPost] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:3001/posts/byId/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
    }, []);

  return (
    <div>
        <h2>
            This is Post {id}
        </h2>
        <PostCard post={post}></PostCard>
    </div>
  );
};

export default Post;