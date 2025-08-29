import styled from 'styled-components';

export const TitleArea = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;

    @media screen and (max-width: 1140px) {
    margin-bottom: 10px;
}

`

export const SubTitleArea = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`

export const SubTitle = styled.p`

    font-weight: 600;
    font-size: 16px;
    color: #DB4444;
`

export const RedRectangle = styled.div`
    background-color: #DB4444;
    height: 30px;
    width: 20px;
    border-radius: 20%;
`

export const Title = styled.h3`

    font-weight: 600;
    font-size: 36px;

`