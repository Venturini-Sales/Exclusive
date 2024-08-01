import { useState } from 'react';
import {
  Circle,
  InfoCardArea,
  InnerCircle,
  Ripple,
  SubTitle,
  Title,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InfoCard({ iconType, TitleText, SubTitleText }) {
  const [ripples, setRipples] = useState([]);

  const handleMouseEnter = () => {
    const newRipple = Date.now();
    setRipples([...ripples, newRipple]);
  };

  return (
    <InfoCardArea>
      <Circle onMouseEnter={handleMouseEnter}>
        <FontAwesomeIcon
          icon={iconType}
          size="2xl"
          style={{ color: '#ffffff', zIndex: '2' }}
        />
        <InnerCircle />
        {ripples.map((ripple) => (
          <Ripple
            key={ripple}
            onAnimationEnd={() => {
              setRipples(ripples.filter((r) => r !== ripple));
            }}
          />
        ))}
      </Circle>

      <div>
        <Title>{TitleText}</Title>
        <SubTitle>{SubTitleText}</SubTitle>
      </div>
    </InfoCardArea>
  );
}

export default InfoCard;
