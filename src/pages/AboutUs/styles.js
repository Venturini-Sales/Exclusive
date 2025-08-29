import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const PageStyle = styled.section`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
`

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.laptop}{
    justify-content: center;
    }

    
`

export const AboutTitle = styled.h1`
    font-weight: 600;
    font-size: 54px;
`

export const AboutText = styled.p`
    width: 35vw;
    margin-top: 30px;

    @media ${device.desktop} { 
    font-size: 16px;
    }

    @media ${device.desktopL} { 
    font-size: 35px;
    }

    @media ${device.laptop}{
    width: 80vw;
    }
`

export const AboutArea = styled.div`
    margin-left: 168px;

    @media ${device.laptop}{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    text-align: center;
    }

`

export const StyledImg = styled.img`
    width: 45vw;

    @media ${device.laptop}{
    display: none;
    }

`

export const EmployerContainer = styled.div`
    gap: 30px;
    margin: 60px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const StyledEmployer = styled.img`
    width: 320px;

    @media ${device.mobileM}{
    width: 300px;
    }


`

export const EmployerInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet}{
    text-align: center;
    }

`

export const EmployerName = styled.h2`
    margin-top: 20px;
    letter-spacing: 2px;
    font-size: 27px;
    font-weight: 500;
`
export const EmployerRole = styled.p`

`

export const InfoArea = styled.div`
    margin-top: 120px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    gap: 35px;
    flex-wrap: wrap;
`