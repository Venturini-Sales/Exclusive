import styled from 'styled-components'; 
import { device } from '../../styles/breakpoint';



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
    position: absolute;
    top: -50px;
    left: 80%;
    transform: translateX(-50%);

  
  }

  .slick-next {
    position: absolute;
    top: -50px;
    left: 100%;
    transform: translateX(-50%);

    
  }

  .slick-list {
    overflow: ${(props) => props.overflow || 'visible'} !important;
  }
  .slick-slide {
    pointer-events: all; 
  }

  .slick-track{
    box-sizing: border-box;
    display: flex;
    gap: 10px;
  }

`

;