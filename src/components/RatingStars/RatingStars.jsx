import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RatingStars = ({ maxStars, rating }) => {
  const starsReceived = Math.min(Math.max(rating, 0), maxStars);

  const starsFilled = [];

  for (let i = 0; i < maxStars; i++) {
    starsFilled.push(
      <div key={i}>
        <FontAwesomeIcon
          icon={faStar}
          style={{
            color: i < starsReceived ? '#FFD43B' : '#b9b9b9',
            fontSize: window.innerWidth < 768 ? '14px' : '14px',
          }}
        />
      </div>,
    );
  }

  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>{starsFilled}</div>
  );
};

export default RatingStars;
