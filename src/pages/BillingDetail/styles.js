import styled from 'styled-components';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 67px;
    overflow: hidden;
`

export const PageContainer = styled.div`

`

export const PageTitleArea = styled.div`
    display: flex;
    font-size: 14px;
`

export const PageTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
`

export const BillingArea = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 100px;
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
  

  input {
    width: 300px;
    background-color: transparent;
    outline: none;
    border: none;
    
  }
`

export const ProductArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 22px;
`

export const ProductsDetail = styled.div`
`

export const ProductDetailArea = styled.div`
    display: flex;
    align-items: center;
    gap: 200px;
    margin-bottom: 30px;
`

export const ProductDetailInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
`

export const ProductImage = styled.img`
    width: 50px;

`

export const ProductName = styled.div``

export const ProductPrice = styled.div``

export const FullPriceArea = styled.div``

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: ${(props) => props.bordertop || '2px solid #999999'};
`

export const SelectRadioArea = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: space-between;

`

export const RadioArea = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const RadioInput = styled.input.attrs({ type: "radio" })`
     display: none;
`
export const RadioLabel = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    border-radius: 50%;
    background-color: #fff;
    box-sizing: border-box;
    transition: all 0.2s ease;
  }

  &::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px; 
    height: 12px;
    background-color: black; 
    border-radius: 50%;
    opacity: 0;
    transition: all 0.2s ease;
  }

  input:checked + &::after {
    opacity: 1;
  }
`
export const CupomTotalArea = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 15px;
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

export const BuyButtonArea = styled.div`
    margin: auto;
    margin-top: 30px;
`
;
