import styled from 'styled-components'

export const ListStyle = styled.ul`

  display: flex;
  flex-direction: column;
  gap: 20px;

`

export const ListElementStyle = styled.li`

  list-style: none;
  font-size: 16px;
  font-weight: 400;

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
`;

export const SupportSection = styled.div`
  flex: 1;

  p {
   width: 90%;
  }

`;

export const AccountSection = styled.div`
  flex: 1;

`;

export const ShortcutSection = styled.div`
  flex: 1;
  margin-right: 25px;

`;

export const StyledEmailInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1.5px solid #FAFAFA;
  border-radius: 4px;
  padding: 12px 10px 12px 16px;

  input {
    color: white;
    background-color: transparent;
    outline: none;
    border: none;
    margin-right: 6px;
  }

  svg {
    cursor: pointer;
  }
`;
