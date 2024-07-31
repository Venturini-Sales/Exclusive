import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RatingStars = ({ maxStars }) => {
  const RandomRatingStarsIcon = (maxStars) => {
    if (maxStars > 5) {
      return;
    }

    let starsReceived = Math.floor(Math.random() * maxStars);
    starsReceived = starsReceived === 0 ? 1 : starsReceived;

    const starsFilled = [];

    for (let i = 0; i < maxStars; i++) {
      starsFilled.push(
        <div key={i}>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: i < starsReceived ? '#FFD43B' : '#b9b9b9' }}
          />
        </div>,
      );
    }

    return starsFilled;
  };
  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      {RandomRatingStarsIcon(maxStars)}
    </div>
  );
};

export default RatingStars;
