import { Link } from "react-router";

function ArticleSummary({ article }) {
  return (
    <article className="article-summary">
      <div className="article-header">
        <h3>{article.title}</h3>
        <div className="article-meta">
          <span>By {article.author}</span>
          <span>{" "}</span>
          <small className="article-creation-date">{new Date(article.created_at).toLocaleDateString()}</small>
          <span>{" topic: "}</span>
          <span>{article.topic}</span>
        </div>
      </div>
      
      {article.article_img_url && (
        <div className="image-container">
        <img 
          src={article.article_img_url} 
          alt={article.title}
          className="article-img"
        />
      </div>
      )}
      
      <div className="article-stats">
        <span>Votes: {article.votes}</span>
        
      </div>
      
      <Link 
        to={`/articles/${article.article_id}`} 
        className="read-more-link"
      >
        Read More
      </Link>
    </article>
  );
}

export default ArticleSummary;