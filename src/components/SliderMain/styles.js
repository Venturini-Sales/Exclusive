import styled from 'styled-components'; 


export const SliderWrapper = styled.div`
  width: 100%;



  .slick-prev,
  .slick-next {
    top: -50px;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 30px;
  }  

  .slick-prev {
    left: calc(95% - 60px);
  }

  .slick-next {
    right: calc(10% - 60px);
  }

  .slick-list {
    overflow: visible !important;
  }
  .slick-slide {
    pointer-events: all; /* Permite interação com os slides fora da área visível */
  }

`

;