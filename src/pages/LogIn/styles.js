import styled from 'styled-components';


export const PageStyle = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;

`;

export const PageSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};;
`

export const ButtonFormArea = styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: 30px;

    a {
        text-decoration: none;
        border: none;
        color: #DB4444;
    }

    button{
        width: 143px;
        padding: 16px 48px 16px 48px;
    }
`