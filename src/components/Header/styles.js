import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 0.5px solid #00000050;
  background-color: #ffffff;
  color: #000000;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 38px;
  padding-bottom: 10px;

`;

export const ExclusiveIcon = styled.div`
   text-align: center;
    flex: 1;
    font-size: 24px;
    font-weight: 700;
    
`

export const HeaderLinks = styled.div`
    
    text-align: center;
    flex: 1;
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
`

export const UserOptionsSection = styled.div`
    flex: 1;
`


export const StyledUserArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const IconArea = styled.div`
  cursor: pointer;

`


;