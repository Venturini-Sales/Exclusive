import styled from 'styled-components';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 67px;
    overflow: hidden;
`
export const ProductInfoContainer = styled.div`
    display: flex;
    margin: 10px 0px;
    width: 1020px;
    border-radius: 5px;
    padding: 20px 0px;
    justify-content: center;
    box-shadow: 0px 0px 3px rgb(0,0,0,0.1);
`

export const ContainerItensText = styled.p`
    flex: 1;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`

export const ProductsAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    gap: 20px;

`

export const ProductsInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0px;
    width: 1020px;
    border-radius: 5px;
    padding: 20px 0px;
    justify-content: center;
    box-shadow: 0px 0px 3px rgb(0,0,0,0.1);

`

export const ProductMainInfo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    img{
        width: 50px;
    }

    p{
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }

`
export const ItemQuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex: 1;    

`

export const ItemQuantity = styled.input`
    width: 50px;

`

export const NumberInput = styled.input.attrs({ type: 'number' })`
  width: 55px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
  border: 2px solid #999999;
  border-radius: 6px;
  background-color: #fcfcfc;
  color: #999999;

  &::selection{
    background-color: #fcfcfc;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }

  &::-webkit-inner-spin-button {
  padding: 15px 0; 
  }

  -moz-appearance: textfield;

  &:focus {
    outline: none;
    caret-color: transparent;
    box-shadow: none;
  }
`
export const UtilityButtonsArea = styled.div`
    width: 1020px;
    display: flex;
    justify-content: space-between;

    button{
        user-select: none;
        background-color: transparent;
        color: black;
        font-size: 16px;
        font-weight: 500;
        padding: 10px 30px;
        border-radius: 6px;
        border: 1px solid #999999 ;
        cursor: pointer;
    }

`
export const PaymentSegmentArea = styled.div`
    width: 1020px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 60px;
`

export const CupomArea = styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-start;
`

export const CupomInputArea = styled.div`
    border: 1.5px solid black;
    border-radius: 5px;

`
export const CupomInput = styled.input`
    margin: 5px;
    height: 40px;
    padding: 0px 4px ;
    font-size: 15px;
    text-transform: uppercase;
      font-family: 'Inter',Arial, Helvetica, sans-serif;
        background-color: transparent;
        outline: none;
        border: none;
        text-align: center;

    &::placeholder {
        text-transform: none;
    }
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 5px;
    padding: 25px 20px;

`

export const CartInfo = styled.div`
    display: flex;
    flex-direction: column;

`

export const CartTitle = styled.div`
    font-size: 20px;
    font-weight: 500;

`

export const PricesLabel = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: ${(props) => props.borderbottom || '2px solid #999999'}

`
;