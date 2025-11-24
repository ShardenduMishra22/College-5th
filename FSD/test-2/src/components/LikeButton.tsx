import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleLike = async () => {
    setLoading(true);
    setError(false);

    try {
      // Simulate API call
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.1 ? resolve() : reject();
        }, 500);
      });
      
      setLiked(!liked);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="like-button-container">
      <button
        className={`like-button ${liked ? 'liked' : ''} ${error ? 'error' : ''}`}
        onClick={handleLike}
        disabled={loading}
      >
        {loading ? (
          <span>⏳</span>
        ) : error ? (
          <span>❌ Error</span>
        ) : (
          <>
            <span className="heart">{liked ? '❤️' : '🤍'}</span>
            <span>{liked ? 'Liked' : 'Like'}</span>
          </>
        )}
      </button>
    </div>
  );
}
