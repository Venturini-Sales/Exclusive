import {
  StyledCard,
  StyledCardButton,
  StyledCardButtons,
  StyledCardImage,
  StyledCardInfo,
  StyledPriceArea,
  StyledRatingArea,
  StyledSaleInfo,
  StyledStarsRating,
} from './styles';
import IMG from '../../assets/images/Productframe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import RatingStars from '../RatingStars/RatingStars';
import { useEffect, useState } from 'react';

const ProductCard = ({
  discount,
  productName,
  price,
  promoPrice,
  ratingCount,
}) => {
  return (
    <StyledCard>
      <StyledCardImage>
        <img src={IMG} alt="" />
        <StyledSaleInfo>{discount}</StyledSaleInfo>
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
        <p>{productName}</p>
        <StyledPriceArea>
          <p>{price}</p>
          <p>{promoPrice}</p>
        </StyledPriceArea>
        <StyledRatingArea style={{ display: 'flex', alignItems: 'center' }}>
          <RatingStars maxStars={5} />
          <p>{ratingCount}</p>
        </StyledRatingArea>
      </StyledCardInfo>
    </StyledCard>
  );
};

export default ProductCard;
