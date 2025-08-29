import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border: 1px solid #b2b2b2;
    border-radius: 4px;
    width: 130px;
    height: 145px;

    &:hover{
        background-color: #DB4444;
        color: white;
        border: 1px solid #DB4444;
        cursor: pointer;

        .icon {
            color: white;
        }
    }

`

export const CardText = styled.h4`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
`