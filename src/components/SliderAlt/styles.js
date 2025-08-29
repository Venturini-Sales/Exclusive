import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const SliderContainer = styled.div`
  width: 80%;
  padding: 48px;
  padding-right: 0;
  padding-bottom: 0;
  position: relative;

  @media ${device.laptop} { 
    width: 100%;
    padding: 0;
  }
`;

export const CustomDots = styled.ul`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  list-style: none;

  li {
    margin: 0 5px;

    button {
      background-color: transparent;
      border: none;
      padding: 0;
      cursor: pointer;

      &:before {
        font-size: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ffffff;
        border: 2px solid #ffffff;
        content: '';
        display: inline-block;
      }
    }

    &.slick-active button:before {
      background-color: #db4444;
      border: 2px solid #ffffff;
    }
  }
`;