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