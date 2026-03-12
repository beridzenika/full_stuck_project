import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditPost() {
  const navigate = useNavigate();
  let { id } = useParams();
  
  const [post, setPost] = useState({
    title: "",
    postText: "",
    username: ""
  });
  
  // GET
  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setPost(data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPost((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();

    // UPDATE
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      });
  };

  // title
  useEffect(() => {
    document.title = `Big Blog | Edit the Blog`;
  }, []);


  if (!post) {
    return <h2>Post not found (•́ ᴖ •̀)</h2>;
  }
  return (
    <div className="form-container">
      <h2>Blog {id}</h2>
      <form onSubmit={handleForm}>
        <label>Title:</label>
        <input 
          type="text" 
          name="title" 
          value={post.title} 
          onChange={handleChange} 
          required 
        />

        <label>Author:</label>
        <input 
          type="text" 
          name="username" 
          value={post.username} 
          onChange={handleChange}
          required 
        />

        <label>Text:</label>
        <textarea 
          name="postText" 
          value={post.postText} 
          onChange={handleChange}
          required 
        />

        <button>Update the Blog</button>
      </form>
    </div>
  )
};

export default EditPost;