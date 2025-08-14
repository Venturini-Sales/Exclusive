import styled from 'styled-components';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 67px;
`
export const PageSection = styled.div`
    position: ${(props) => props.position || 'static'};
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-direction: row;
    padding-top:  '100px';
    width: 1150px;
`

export const WishlistPageHeader = styled.div`
    width: 1145px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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

export const WishIconArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p{
        font-size: 16px;
    }

`

export const WishIcon = styled.div`

    img{
        width: 300px;
    }

`


export const SectionsNumberArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
      

`

export const NumbersArea = styled.span``

