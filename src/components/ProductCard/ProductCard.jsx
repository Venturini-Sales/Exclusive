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

const ProductCard = ({
  discountPercentage,
  title,
  price,
  rating,
  thumbnail,
  margin,
}) => {
  const promoPrice = discountPercentage
    ? price - price * (discountPercentage / 100)
    : null;

  return (
    <StyledCard margin={margin}>
      <StyledCardImage>
        <img src={thumbnail} alt={title} />
        {discountPercentage && (
          <StyledSaleInfo>{`${discountPercentage}%`}</StyledSaleInfo>
        )}
        <StyledCardButtons>
          <StyledCardButton>
            <FontAwesomeIcon icon={faEye} style={{ color: '#000000' }} />
          </StyledCardButton>
          <StyledCardButton>
            <FontAwesomeIcon icon={faHeart} style={{ color: '#000000' }} />
          </StyledCardButton>
        </StyledCardButtons>
      </StyledCardImage>
      <StyledCardInfo>
        <p>{title}</p>
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
