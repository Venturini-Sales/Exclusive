import styled from 'styled-components';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
    gap: 100px;
`;

export const PageSection = styled.div`
    display: flex;
    flex-direction:  ${(props) => props.flexdirection || 'row'};
    border-bottom: ${(props) => props.borderbottom || 'none'} ;
    width: 75vw;
`

export const ListStyle = styled.ul`
    display: flex;
    width: 217px;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding-top: 40px;
    padding-right: 20px;
    border-right: 0.5px solid #00000050;`

export const ListElementStyle = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SlideStyle = styled.div`
    img {
        width: 100%;
    }

`