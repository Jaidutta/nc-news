
import { Link, useParams } from "react-router";
import useApiRequest from "../hooks/useApiRequest";
import { getArticleById, getCommentsByArticleId } from "../api";
import Comment from "./Comment";
import VoteButton from "./VoteButton";

function Article() {
    const { article_id } = useParams();
    const { data: article, isLoading: articleLoading, isError: articleError } = useApiRequest(getArticleById, 'article', article_id);
    const { data: comments, isLoading: commentsLoading, isError: commentsError } = useApiRequest(getCommentsByArticleId, 'comments', article_id);

    let totalCommentMessage = article.comment_count > 0 ? "Comments" : "Comment";
    if (articleLoading || commentsLoading) {
        return <p>Loading...</p>;
    }

    if (articleError || commentsError) {
        return <p>Error loading data.</p>;
    }

    if (!article) {
        return <p>Single article not found.</p>;
    }
    
       return (
        <article className="single-article-card">
            <h3 className="single-article-title">{article.title}</h3>
            <div className="single-article-meta">
                <p>Author: {article.author}</p>
                <p>Created at: {new Date(article.created_at).toLocaleDateString()}</p>
                <p>Topic: {article.topic}</p>
            </div>
            <div className="single-article-image-container">
                <img className="single-article-image" src={article.article_img_url} alt={article.title} />
            </div>
            <section className="single-article-interactive-vote">
               <VoteButton article ={article}/>
            </section>

            {/* Render comments */}
            <section className="single-article-comments-section">
                <h4>Total {totalCommentMessage} : {article.comment_count}  </h4>
                <div className="single-article-comments-container">
                    {comments.map((comment) => (
                        <Comment key={comment.created_at} comment={comment} />
                    ))}
                </div>
            </section>
        </article>
    );
}

export default Article