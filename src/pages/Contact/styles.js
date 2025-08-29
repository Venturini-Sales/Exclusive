import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

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

    @media ${device.tablet}{
    flex-direction: column-reverse;
    gap: 60px;
    }
`

export const ContactInfoArea = styled.div`
    padding: 30px;
    margin-left: 20px;
    box-shadow: 0px 0px 5px rgb(0,0,0,0.2);

    @media ${device.tablet}{
    margin-right: 20px;
    }

    @media  (max-width: 400px) {
    box-shadow: none;

    }
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

    @media ${device.tablet}{
    justify-content: center;
    }
`

export const InfoText = styled.p`
    font-size: 14px;
    width: 320px;
    @media ${device.tablet}{
        justify-content: center;
    text-align: center;
    }
`

export const ContactArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 30px;
    margin-bottom: 30px;
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
    flex-wrap: wrap;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border-radius: 5px;
    resize: none;
    outline: none;
    border: none;
    background-color: #f5f5f5;
    color: #000000;
    padding: 10px;

    @media ${device.tablet}{
    width: 62%;
    }
`

export const TextInputArea = styled.div`

    @media ${device.tablet}{
    display: flex;
    justify-content: center;
    }

`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: flex-end;

    @media ${device.tablet}{
    justify-content: center;
    }
`

export const FormArea = styled.form`
    padding: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    margin-right: 20px;
    box-shadow: 0px 0px 5px rgb(0,0,0,0.2);

    @media ${device.tablet}{
    margin-left: 20px;
    }

    @media  (max-width: 400px) {
    box-shadow: none;

    }

`

export const HiddenLabel = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;