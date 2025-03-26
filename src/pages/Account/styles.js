import styled from 'styled-components';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 67px;
    overflow: hidden;
`

export const PageContent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);

`

export const ContentTitle = styled.div`
    grid-column: span 5 / span 5;
    grid-column-start: 1;
    grid-row-start: 1;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    gap: 2px;

    span {
        color: #DB4444;
    }
`

export const ContentSections = styled.div`
    grid-row: span 4 / span 4;
    grid-column-start: 1;
    grid-row-start: 2;
    background-color: red;
`

export const Section = styled.div`
    grid-column: span 4 / span 4;
    grid-row: span 4 / span 4;
    grid-row-start: 2;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`
export const AccountInfoTitle = styled.h3`
    color: #DB4444;
    font-weight: 400;
    margin: 20px;
    margin-bottom: 2px;

`

export const InputTotalArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
 p{
    font-size: 14px ;
 }

`

export const StyledInput = styled.div`
  background-color: #f5f5f5;
  color: #000000;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: auto;
  gap: 15px;
  border-radius: 5px;
  cursor: ${(props) => props.cursortype || 'pointer'};
  

  input {
    width: 300px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: ${(props) => props.cursortype || 'pointer'};
  }
`

export const InputArea = styled.div`
    display: grid;
    margin: 20px;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  
`

export const PasswordAreaTitle = styled.h3`
    font-size: 14px;
    font-weight: 400;

`

export const AccountPasswordArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px;

    input {
        width: 630px;
    }

`