import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RatingStars = ({ maxStars }) => {
  const RandomRatingStarsIcon = (maxStars) => {
    if (maxStars > 5) {
      return;
    }
    let starsReceived = Math.floor(Math.random() * maxStars);

    const starsFilled = [];
    for (let i = 0; i < starsReceived; i++) {
      starsFilled.push(
        <div key={i}>
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
        </div>,
      );
    }
    if (starsFilled.length === 0) {
      starsFilled.push(
        <div key={0}>
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
        </div>,
      );
    }
    return starsFilled;
  };
  return (
    <div style={{ display: 'flex' }}>{RandomRatingStarsIcon(maxStars)}</div>
  );
};

export default RatingStars;
