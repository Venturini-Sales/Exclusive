import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const StyledBand = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${device.mobileL} {
        height: auto;
        padding: 20px 5px;
      }

  div {
    span {
      margin-left: 5px;
      color: white;
      text-decoration: underline;
      cursor: pointer;
      font-weight: 600;
    }
  }
`;
