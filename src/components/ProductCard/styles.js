import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    position: relative;
    margin-bottom: ${(props) => props.margin || '0'};
`

export const StyledCardImage = styled.div `

    img{
        width: 270px;
        height: 250px;
        background-color: black;
    }

`

export const StyledSaleInfo = styled.div `
    text-align: center;
    font-size: 12px;
    color: #FAFAFA;
    border-radius: 4px;
    padding: 4px 12px 4px 12px;
    background-color: #DB4444;
    position: absolute;
    bottom: 90%;
    left: 15px;
`
export const StyledCardButtons = styled.div `
    display: flex;
    gap: 8px;
    flex-direction: column;
    position: absolute;
    bottom: 77%;
    left: 225px;
`
export const StyledCardButton = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 100%;
    padding: 6px;
    cursor: pointer;
`

export const StyledCardInfo = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const StyledPriceArea = styled.div `
    display: flex;
    flex-direction: row;
    gap: 12px;

    p:nth-child(1){
        color: #DB4444;
        font-weight: 500;
        font-size: 16px;
    }

    p:nth-child(2){
        color: #808080;
        text-decoration: line-through;
        font-weight: 500;
        font-size: 16px;
    }

`

export const StyledRatingArea = styled.div `
    display: flex;
    flex-direction: row;
    gap: 12px;

    p{
        color: #808080;
        font-weight: 600;
        font-size: 14px;
    }

`

export const StyledStarsRating = styled.div`


`