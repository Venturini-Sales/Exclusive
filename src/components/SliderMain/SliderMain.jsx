import { SliderWrapper } from './styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderMain = ({ children, rowsType, overflow }) => {
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
    slidesToScroll: 2.5,
    swipeToSlide: true,
    rows: rowsType,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  return (
    <SliderWrapper overflow={overflow}>
      <Slider {...settings}>{children}</Slider>
    </SliderWrapper>
  );
};

export default SliderMain;
