import { SliderWrapper } from './styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderMain = ({ children, rowsType, overflow }) => {
  const CustomArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3.5,
    swipeToSlide: true,
    rows: rowsType,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <SliderWrapper overflow={overflow}>
      <Slider {...settings}>{children}</Slider>
    </SliderWrapper>
  );
};

export default SliderMain;
