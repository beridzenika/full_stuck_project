import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

function Post() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [post, setPost] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setPost(data);
    });
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      });
  }


  return (
    <div>
        <h2>
            This is Post {id}
        </h2>
        <PostCard post={post}></PostCard>
        <button onClick={() => {navigate(`/editpost/${id}`)}}>
          Edit the Blog
        </button>
        <button onClick={handleDelete}>
          Delete the Blog
        </button>
    </div>
  );
};

export default Post;