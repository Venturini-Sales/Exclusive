import React from 'react';
import {
  StyledCard,
  StyledCardButton,
  StyledCardButtons,
  StyledCardImage,
  StyledCardInfo,
  StyledPriceArea,
  StyledRatingArea,
  StyledSaleInfo,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import RatingStars from '../RatingStars/RatingStars';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  discountPercentage,
  title,
  price,
  rating,
  thumbnail,
  margin,
  id,
  onEyeClick,
}) => {
  const promoPrice = discountPercentage
    ? price - price * (discountPercentage / 100)
    : null;

  const { user, toggleWishlistItem, isInWishlist } = useAuth();
  const navigate = useNavigate();

  const handleWishlistClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (!user) {
      navigate('/signup');
      return;
    }

    toggleWishlistItem(id);
  };

  const isWishlisted = isInWishlist(id);

  return (
    <StyledCard margin={margin}>
      <StyledCardImage>
        <img src={thumbnail} alt={title} />
        {discountPercentage && (
          <StyledSaleInfo>{`${discountPercentage}%`}</StyledSaleInfo>
        )}
        <StyledCardButtons>
          <StyledCardButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onEyeClick) onEyeClick(thumbnail);
            }}
          >
            <FontAwesomeIcon icon={faEye} style={{ color: '#000000' }} />
          </StyledCardButton>
          <StyledCardButton onClick={handleWishlistClick}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: isWishlisted ? '#DB4444' : '#000000' }}
            />
          </StyledCardButton>
        </StyledCardButtons>
      </StyledCardImage>
      <StyledCardInfo>
        <p>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</p>
        <StyledPriceArea>
          {promoPrice && <p>{`$${promoPrice.toFixed(2)}`}</p>}
          <p>{`$${price.toFixed(2)}`}</p>
        </StyledPriceArea>
        <StyledRatingArea style={{ display: 'flex', alignItems: 'center' }}>
          <RatingStars maxStars={5} rating={rating} />
          <p>{rating.toFixed(1)}</p>
        </StyledRatingArea>
      </StyledCardInfo>
    </StyledCard>
  );
};

export default ProductCard;
