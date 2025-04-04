import { updateVoteByArticleId } from "../api";
import { useState } from "react";

function VoteButton({ article }) {
    const [optimisticVote, setOptimisticVote] = useState(0);
    const [voting, setVoting] = useState(false); 
    const [voteError, setVoteError] = useState(null); 

    const handleClick = (vote) => {
        if (voting) {
            return; 
        }

        setVoting(true);
        setVoteError(null); 

        setOptimisticVote((currOptimisticVote) => currOptimisticVote + vote);

        updateVoteByArticleId(article.article_id, vote)
            .then(() => {
                setVoting(false);
            })
            .catch((error) => {
                
                setOptimisticVote((currOptimisticVote) => currOptimisticVote - vote);
                setVoteError("Failed to update vote. Please try again.");
                setVoting(false);
                
            });
    };

    return (
        <div className="vote-section">
            <p className="vote-count">{article.votes + optimisticVote} votes</p>
            <button
                className="single-article-votes-button increment-button"
                onClick={() => handleClick(1)}
                disabled={voting}
            >
                <span id="increment-heart">&#x2764;&#xFE0F;</span> UpVote
            </button>
            <button
                className="single-article-votes-button decrement-button"
                onClick={() => handleClick(-1)}
                disabled={voting}
            >
                <span id="decement-heart">&#x2764;&#xFE0F;</span> Downvote
            </button>
            {voteError && <p className="vote-error">{voteError}</p>}
        </div>
    );
}

export default VoteButton;