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

  // title
  useEffect(() => {
    document.title = `Big Blog | ${post.title}`;
  }, [post.title]);


  if (!post) {
    return <h2>Post not found (•́ ᴖ •̀)</h2>;
  }
  return (
    <div>
        <h2>
            This is Post {id}
        </h2>
        <PostCard post={post}></PostCard>
        <div className="postButtons">
          <button onClick={() => {navigate(`/editpost/${id}`)}}>
            Edit the Blog
          </button>
          <button onClick={handleDelete}>
            Delete the Blog
          </button>
        </div>
    </div>
  );
};

export default Post;