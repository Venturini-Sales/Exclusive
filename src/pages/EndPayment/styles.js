import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const PageStyle = styled.section`
   display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 67px;
`

export const PageSection = styled.div`
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media ${device.laptop}{
        padding: 0px 20px;
    }
`

export const EndIconArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p{  
        text-align: center;
        font-size: 16px;


        
    }

`

export const EndIcon = styled.div`

    img{
        width: 300px;
         @media ${device.mobileL}{
            width: 200px;

        }
        
    }

`
