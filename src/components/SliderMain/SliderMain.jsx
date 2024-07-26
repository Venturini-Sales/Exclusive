import { SliderWrapper } from './styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderMain = ({ children }) => {
  const CustomArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{ ...style, display: 'block', top: '-50px' }}
      onClick={onClick}
    />
  );

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>{children}</Slider>
    </SliderWrapper>
  );
};

export default SliderMain;
