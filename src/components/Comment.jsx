function Comment({ comment }) {
  return (
      <article key={comment.created_at} className="single-article-comment">
          <div className="single-article-comment-header">
              <span>Author: {comment.author}</span>
              <small>{new Date(comment.created_at).toLocaleDateString()}</small>
          </div>
          <p className="single-article-comment-body"> {comment.body}</p>
      </article>
  );
}
export default Comment