import { useState } from 'react';

interface TweetProps {
  author: string;
  username: string;
  content: string;
  timestamp: string;
  avatar?: string;
}

export default function Tweet({ author, username, content, timestamp, avatar }: TweetProps) {
  const [liked, setLiked] = useState<boolean>(false);
  const [retweeted, setRetweeted] = useState<boolean>(false);

  return (
    <div className="tweet">
      <img src={avatar || '/default-avatar.png'} alt={author} className="avatar" />
      
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="author">{author}</span>
          <span className="username">@{username}</span>
          <span className="timestamp">· {timestamp}</span>
        </div>
        
        <p className="tweet-text">{content}</p>
        
        <div className="tweet-actions">
          <button className="action-btn">
            💬 Reply
          </button>
          <button
            className={`action-btn ${retweeted ? 'active' : ''}`}
            onClick={() => setRetweeted(!retweeted)}
          >
            🔁 Retweet
          </button>
          <button
            className={`action-btn ${liked ? 'active' : ''}`}
            onClick={() => setLiked(!liked)}
          >
            {liked ? '❤️' : '🤍'} Like
          </button>
          <button className="action-btn">
            📤 Share
          </button>
        </div>
      </div>
    </div>
  );
}
