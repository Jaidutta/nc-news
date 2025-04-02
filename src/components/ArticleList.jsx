import { Link } from "react-router";
import { getAllArticles } from "../api";
import useApiRequest from "../hooks/useApiRequest";
import ArticleSummary from "./ArticleSummary";

function ArticleList({reload}) {
  const { data: articles, isLoading, isError } = useApiRequest(getAllArticles, 'articles', reload);

  if (isLoading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading articles...</p>
    </div>
  );
  
  if (isError) return (
    <div className="error-container">
      <p>⚠️ Failed to load articles</p>
    </div>
  );

  if (!articles?.length) return (
    <div className="empty-state">
      <p>No articles found</p>
    </div>
  );

  

  return (
    <main className="article-list">
      <div className="list-header">
        <h1>Latest News</h1>
        <div className="header-actions">
          <Link to="/articles/new-article" className="create-button">
            + New Article
          </Link>
        </div>
      </div>

      <div className="filter-controls">
        <button className="filter-button">
          <span className="filter-icon">☰</span> Filters
        </button>
      </div>

      <section className="articles-container">
        {articles.map((article) => (
          <ArticleSummary key={article.article_id} article={article} />
        ))}
      </section>
    </main>
  );
}

export default ArticleList;