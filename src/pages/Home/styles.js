import styled from 'styled-components';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
    gap: 100px;
    overflow: hidden;
`;

export const PageSection = styled.div`
    position: ${(props) => props.position || 'static'};
    display: flex;
    flex-direction:  ${(props) => props.flexdirection || 'column'};
    justify-content:  ${(props) => props.justifycontent || 'none'};
    border-top: ${(props) => props.bordertop || 'none'} ;
    padding-top:  ${(props) => props.paddingtop || '100px'} ; ;
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

export const SectionTitleArea = styled.div`

display: flex;
align-items: center;
gap: 50px;
justify-content: ${(props) => props.justifycontent || 'none'};
`

export const ButtonArea = styled.div`

display: flex;
justify-content: center;
width: 75vw;

`

export const AltCardArea = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 40px;
`

export const CardArea = styled.div `

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`

export const BannerImg = styled.img`
    width: 100%;
    cursor: pointer;
`

export const BannerText = styled.h2`
    position: absolute;
    color: #00f361;
    font-size: 3.5vw;
    text-align: center;
    bottom: 30%;
    left: 5%;
    cursor: pointer;
`