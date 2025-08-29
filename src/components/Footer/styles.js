import styled from 'styled-components'
import { device } from '../../styles/breakpoint'

export const ListStyle = styled.ul`

  display: flex;
  flex-direction: column;
  gap: 20px;

`

export const ListElementStyle = styled.li`

  list-style: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  

`

export const TitleH3 = styled.h3 `

  font-size: 20px;
  font-weight: 500;

` 

export const TitleNewH3 = styled(TitleH3) `

  font-size: ${props => props.fontSize || '20px'};;
  font-weight: 700;

`

export const Footer = styled.footer`
  background-color: black;
  color: white;
  width: 100%; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 45px 10px 45px 10px;

   @media ${device.tablet} {
    align-items: center;
    flex-direction: column;
    gap: 50px;
   }
`;

export const NewsletterSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
  gap: 20px;

  p:nth-child(3) {
    font-size: 12.5px;
    color: white;
  }

   @media ${device.tablet} {
    align-items: center;
    text-align: center;
    margin-left: 0;
   }
`;

export const SupportSection = styled.div`
  flex: 1;

  p {
   width: 90%;

   @media ${device.tablet} {
    width: auto;
   }
  }

  @media ${device.tablet} {
    text-align: center;
   }



`;

export const AccountSection = styled.div`
  flex: 1;

  @media ${device.tablet} {
  text-align: center;
  }

`;

export const ShortcutSection = styled.div`
  flex: 1;
  margin-right: 25px;

  @media ${device.tablet} {
  margin-right: 0px;
  text-align: center;
    
  }

`;
