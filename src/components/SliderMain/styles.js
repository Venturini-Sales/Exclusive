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
    left: 65vw;
  }

  .slick-next {
    right: 3vw;
  }

  .slick-list {
    overflow: ${(props) => props.overflow || 'visible'} !important;
  }
  .slick-slide {
    pointer-events: all; /* Permite interação com os slides fora da área visível */
  }

  .slick-track{

    display: flex;
    gap: 10px;
  }

`

;