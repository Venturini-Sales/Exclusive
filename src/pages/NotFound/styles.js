import styled from 'styled-components';

export const PageStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 100px;
  width: 75vw;
`;

export const PageLabelArea = styled.div`

  display: flex;
  flex-direction: row;
  gap: 10px;

`

export const PageLabel = styled.p`

    font-size: 14px;
    color: ${(props) => props.color || '#808080'};

`
export const ErroPage = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const ErroTitle = styled.h1`
    
    font-size: 110px;
    font-weight: 500;
    margin-top: 50px;

`

export const ErroSubTitle = styled.p`

    font-size: 16px;
    margin-bottom: 30px;
`