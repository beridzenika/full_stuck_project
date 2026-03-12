function PostCard({ post }) {
  return (
    <article key={post.id} onClick={onclick} className="postCard">
        <header className="postHeader">
            <h2 className="postTitle">{post.title}</h2>
            <span className="postAuthor">by {post.username}</span>
        </header>

        <p className="postText">{post.postText}</p>
    </article>
    );
}

export default PostCard;

