import styled from 'styled-components';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 67px;
    overflow: hidden;
`
export const ProductArea = styled.div`
    display: flex;
    width: 1100px;
`

export const ProductPhotoArea = styled.div`
flex: 1;

img{
    width: 500px;
}

`

export const ProductInfoArea = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 35px;
`

export const ProductInfoTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid #808080;
    padding-bottom: 20px;
`

export const ProductTitle = styled.div`
    font-size: 24px;
    font-weight: 600;

`

export const ProductReviewArea = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

`

export const ProductReviewCount = styled.div`
    font-size: 14px;
    color: #808080;

`

export const ProductPrice = styled.div`
    font-size: 24px;
    font-weight: 400;
    display: flex;
    gap: 5px;
    align-items: center;
`

export const ProductPriceOriginal = styled.div`
    

`

export const ProductPricePromo = styled.div`
   color: #DB4444;

`

export const ProductPromoPercent = styled.div`
    background-color: #DB4444;
    color: white;
    padding: 3px;
    border-radius: 4px;
    font-size: 10px;
`

export const ProductSynopsis = styled.div`
   

`

export const ProductInfoBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const WishButton = styled.div`
    display: flex;
    border: 1px solid #808080;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
    cursor: pointer;

`


export const ReturnDeliveryCard = styled.div`
    border: 1px solid #808080;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    gap: 20px;
`

export const ReturnIcon = styled.div``

export const ReturnTextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`
export const ReturnTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
`
export const ReturnText = styled.div`
    font-size: 12px;
    font-weight: 500;

`

export const RelatedItemsArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

export const RelatedItemsContainer = styled.div`
    display: flex;
    gap: 10px;

`