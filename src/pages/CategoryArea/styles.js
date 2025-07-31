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
    justify-content: left;
    gap: 20px;
    flex-direction: row;
    padding-top:  '100px';
    width: 1140px;
    margin-bottom: 30px;
`

export const CategorySelection = styled.select`

  padding: 5px;
  font-size: 16px;
  text-align: center;
  border: 2px solid #999999;
  border-radius: 6px;
  background-color: #fcfcfc;
  color: black;
  font-weight: 500;

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

  &:focus {
    outline: none;
    caret-color: transparent;
    box-shadow: none;
  }
`

export const CategoryOptions = styled.option`
  background-color: #fcfcfc;
  color: #999999;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

`

export const CategoryPageHeader = styled.div`
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

export const ChoiseArea = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageSearch = styled.div`

img{
  width: 350px;
}
`

export const SearchText = styled.div`
  font-weight: 500;
  font-size: 18px;

`

export const SectionsNumberArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
      

`

export const NumbersArea = styled.span``

