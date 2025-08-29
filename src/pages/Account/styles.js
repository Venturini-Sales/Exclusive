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

export const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    gap: 50px;

`

export const ContentTitle = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    gap: 2px;

    span {
        color: #DB4444;
    }

    @media ${device.laptop}{
    justify-content: center;
    }
`

export const SectionsArea = styled.div`
    display: flex;
    gap: 50px;

    @media ${device.laptop}{
    flex-direction: column;
    gap: 60px;
    }

    

`

export const ContentSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${device.laptop}{
  flex-direction: row;
  justify-content: space-around;
  gap: 60px;
  }


  @media ${device.tablet}{
  flex-direction: column;
  align-items: center;

  }
`

export const Sections = styled.div`
        
`

export const SectionsTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;

`

export const SubSections = styled.ul`
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;
    li{
        margin-left: 20px;
        margin-bottom: 5px;

        
    @media ${device.laptop}{
        margin: 0;
        text-align: center;
    }

        p{
            text-decoration: none;
            color: black;
        }
        p:hover{
            cursor: pointer;
            color: #DB4444;
        }
    }

`

export const Section = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0px 0px 5px rgb(0,0,0,0.2);

    @media  (max-width: 500px) {
    box-shadow: none;

    }

    @media ${device.laptop}{
    align-items: center;
    }
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
  cursor: ${(props) => props.cursortype || 'text'};
  

  input {
    width: 300px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: ${(props) => props.cursortype || 'text'};
  }
`

export const InputArea = styled.div`
    display: grid;
    margin: 20px;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;

    @media ${device.laptop}{
    display: flex;
    flex-direction: column;
    }
  
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
        width: 55vw;
    }

    @media ${device.laptop}{
    gap: 20px;
    align-items: center;
    }

`
export const ButtonsArea = styled.div`
    display: flex;
    gap: 20px;
    justify-content: end;
`

export const CancelButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`