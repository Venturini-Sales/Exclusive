import styled from 'styled-components';
import { device } from '../../styles/breakpoint';


export const PageStyle = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;

  img {
    width: 100%;
    height: 100vh;
  }

  @media ${device.laptop}{
  justify-content: center;
  text-align: center;

  .responsiveImageSettings{
  display: none;
  }}
`;

export const PageSection = styled.div`
    display: flex;
    justify-content: ${props => props.justifycontent || 'center'};
    align-items: center;
    width: ${props => props.width};

   
`