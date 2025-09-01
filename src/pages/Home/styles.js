import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const PageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
    gap: 100px;
    overflow: hidden;

    @media screen and (max-width: 1140px) {
    gap: 60px;
}

`

export const PageSection = styled.div`
    position: ${(props) => props.position || 'static'};
    display: flex;
    flex-direction:  ${(props) => props.flexdirection || 'column'};
    justify-content:  ${(props) => props.justifycontent || 'none'};
    border-top: ${(props) => props.bordertop || 'none'} ;
    padding-top:  ${(props) => props.paddingtop || '100px'} ;
    gap:  ${(props) => props.gap || '0'};
    width: 75vw;

    @media ${device.laptop} { 
        flex-direction:  ${(props) => props.responsiveFlexDirection || 'column'};
        justify-content:  ${(props) => props.responsiveJustifyContent || 'none'};
        gap:  ${(props) => props.responsiveGap || '0'};
     }
`

export const ListStyle = styled.ul`
    display: flex;
    width: 217px;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding-top: 40px;
    padding-right: 20px;
    border-right: 0.5px solid #00000050;
    
    @media ${device.laptop} {
        width: auto;
        flex-direction: row;
        border-right: none;
        padding-bottom: 20px;
        padding-right: 0px;
        margin-bottom: 50px;
        border-bottom: 0.5px solid #00000050;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }

    `
   
export const ListElementStyle = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;



    @media ${device.laptop}{
    background-color: #DB4444;
    color: white;
    padding: 5px;
    border-radius: 5px;
    }
    
`

export const SlideStyle = styled.div`
    cursor: pointer;
    
    img {
        width: 100%;
    }

`

export const SectionTitleArea = styled.div`

display: flex;
align-items: center;
gap: 50px;
justify-content: ${(props) => props.justifycontent || 'none'};

@media screen and (max-width: 1140px) {
    margin-left: 10px;
    margin-bottom: 20px;
    align-items: flex-start;
    flex-direction: column;
    gap: 0;
}

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
    flex-wrap: wrap;
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

export const BannerCategory = styled.h3`
    position: absolute;
    font-size: 1.2vw;
    color: #DB4444;
    cursor: pointer;
    left: 3%;
    top: 17%;

`

export const BannerTitle = styled.h1`

    position: absolute;
    font-size: 3vw;
    color: #ffffff;
    cursor: pointer;
    line-height: 1.3;
    width: 50%;
    top: 30%;
    left: 3%;
`

export const BannerText = styled.h2`
    position: absolute;
    color: #DB4444;
    font-size: 4vw;
    text-align: center;
    bottom: 20%;
    left: 3%;
    cursor: pointer;
`