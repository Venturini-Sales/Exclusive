import { CustomDots, SliderContainer } from './styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderAlt = ({ children }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    waitForAnimate: false,
    appendDots: (dots) => <CustomDots>{dots}</CustomDots>,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>{children}</Slider>
    </SliderContainer>
  );
};

export default SliderAlt;
