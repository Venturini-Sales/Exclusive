import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../styles/breakpoint';

export const StyledHeader = styled.header`
  border-bottom: 0.5px solid #00000050;
  background-color: #ffffff;
  color: #000000;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px 10px;
  position: relative;
`;

export const ExclusiveIcon = styled.div`
  text-align: center;
  flex: 1;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  @media ${device.tablet} {
    flex: 0;
  }
`;

export const HeaderLinks = styled.div`
  text-align: center;
  flex: 2;
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  li {
    font-size: 16px;
    font-weight: 400;
    list-style: none;
    cursor: pointer;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const UserOptionsSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    display: none;
  }
`;

export const StyledUserArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media ${device.tablet}{
    gap: 80px;
  }
`;

export const IconArea = styled.div`
  cursor: pointer;
`;

export const CheckIcon = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked + label {
    --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
    --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
    --scale-bar: 0;
    --rotate-bar-one: 45deg;
    --rotate-bar-three: -45deg;
  }
  &:checked + label > div:nth-child(1) {
    transition: top 200ms, transform 200ms 100ms;
  }
  &:checked + label > div:nth-child(3) {
    transition: bottom 200ms, transform 200ms 100ms;
  }
`;

export const IconMenu = styled.label`
  --gap: 5px;
  --height-bar: 3.5px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  height: 21px;
  
  @media only screen and (min-width: 769px) { 
    display: none; 
  }
`;

const BaseBar = styled.div`
  position: relative;
  height: var(--height-bar);
  width: 120%;
  border-radius: 2px;
  background-color: #000;
`;

export const Bar1 = styled(BaseBar)`
  top: var(--pos-y-bar-one);
  transform: rotate(var(--rotate-bar-one));
  transition: top 200ms 100ms, transform 100ms;
`;

export const Bar2 = styled(BaseBar)`
  transform: scaleX(var(--scale-bar));
  transition: transform 150ms 100ms;
`;

export const Bar3 = styled(BaseBar)`
  bottom: var(--pos-y-bar-three);
  transform: rotate(var(--rotate-bar-three));
  transition: bottom 200ms 100ms, transform 100ms;
`;

export const NavAreaMobile = styled.div`
  position: relative;
  z-index: 999;
  background-color: #db4444;
  padding: 30px 0;
  @media only screen and (min-width: 768px) { 
    display: none; 
  }
`;

export const StyledNavbarMobile = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const StyledSectionsMobile = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

export const UserOptionsSectionMobile = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
