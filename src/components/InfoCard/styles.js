import styled, { keyframes } from 'styled-components';

export const InfoCardArea = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

`


export const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

export const Circle = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerCircle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Ripple = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2F2E30;
  animation: ${rippleEffect} 1s forwards;
`;

export const Title = styled.h3`

  font-weight: 600;
  font-size: 17px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`

export const SubTitle = styled.p`

    font-size: 13px;
    font-weight: 400;
    text-align: center;
`