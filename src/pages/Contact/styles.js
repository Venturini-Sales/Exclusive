import styled from 'styled-components';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 67px;
    overflow: hidden;
`

export const ContactSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 2px;
`

export const ContactInfoArea = styled.div`
    padding: 30px;
    box-shadow: 0px 0px 5px rgb(0,0,0,0.2);

`

export const PhoneIcon = styled.div`
    background-color: #DB4444;
    padding: 10px;
    border-radius: 100%;
`

export const InfoTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
`

export const InfoTitleArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const InfoText = styled.p`
    font-size: 14px;
    width: 320px;
`

export const ContactArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 30px;
    margin-right: 65px;
    margin-bottom: 30px;
    padding-right: 10px;
    border-bottom: ${(props) => props.borderbottom || '1px solid #808080'} ;
`

export const StyledInput = styled.div`
  background-color: #f5f5f5;
  color: #000000;
  width: 200px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 15px;
  border-radius: 5px;

  input {
    background-color: transparent;
    outline: none;
    border: none;
  }
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    grid-area: inputs;  
`

export const TextArea = styled.textarea`
    width: 620px;
    height: 200px;
    border-radius: 5px;
    resize: none;
    outline: none;
    border: none;
    background-color: #f5f5f5;
    color: #000000;
    padding: 10px;
`

export const TextInputArea = styled.div`
    grid-area: textArea;
`

export const ButtonArea = styled.div`
    grid-area: button;
`

export const FormArea = styled.div`
    padding: 30px;
    display: grid;
    gap: 5px;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-template-areas: 
    "inputs inputs inputs"
    "textArea textArea textArea"
    ". . button";
    box-shadow: 0px 0px 5px rgb(0,0,0,0.2);

`