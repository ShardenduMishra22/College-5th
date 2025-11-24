import { useState } from 'react';

interface StarRatingProps {
  maxStars?: number;
}

export default function StarRating({ maxStars = 5 }: StarRatingProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  return (
    <div className="star-rating">
      <div className="stars">
        {[...Array(maxStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              className={`star ${starValue <= (hoverRating || rating) ? 'filled' : ''}`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHoverRating(starValue)}
              onMouseLeave={() => setHoverRating(0)}
            >
              ★
            </span>
          );
        })}
      </div>
      <p>Rating: {rating} / {maxStars}</p>
    </div>
  );
}
