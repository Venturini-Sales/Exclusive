import styled from 'styled-components';
import { device } from '../../styles/breakpoint';


export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    position: relative;
    @media screen and (max-width: 600px) { 
        margin-bottom: 10px;
    }

`

export const StyledCardImage = styled.div `
    position: relative;
    background-color: #b9b9b9;
    width: 100%;
    display: flex;
    justify-content: center;

    img{
    width: 100%;
    max-width: 270px;  
    display: block;

 
    }

    


`

export const StyledSaleInfo = styled.div `
    text-align: center;
    font-size: 12px;
    color: #FAFAFA;
    border-radius: 4px;
    padding: 4px 12px;
    background-color: #DB4444;
    position: absolute;
    top: 8px;   
    left: 8px; 
`
export const StyledCardButtons = styled.div `
    display: flex;
    gap: 8px;
    flex-direction: column;
    position: absolute;
    top: 8px;   
    right: 8px; 
`
export const StyledCardButton = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 100%;
    padding: 6px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
`

export const StyledCardInfo = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    p {
    margin: 0;
    white-space: nowrap;       
    overflow: hidden;          
    text-overflow: ellipsis;  
  }

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
        color: #b9b9b9;
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
        color: #b9b9b9;
        font-weight: 600;
        font-size: 14px;
    }

`

export const StyledStarsRating = styled.div`


`