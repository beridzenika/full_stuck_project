import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const post = {
      title: formData.get("title"),
      postText: formData.get("postText"),
      username: formData.get("username")
    };

    fetch("http://localhost:3001/posts", {
      method: "POST",
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

  return (
    <div className="form-container">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleForm}>
        <label>Title:</label>
        <input type="text" name="title" required />

        <label>Author:</label>
        <input type="text" name="username" required />

        <label>Text:</label>
        <textarea name="postText" required />

        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default CreatePost