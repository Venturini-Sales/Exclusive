import styled from 'styled-components';



export const StyledForm = styled.div`

    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
        font-size: 36px;
        font-weight: 500;
    }

    h3 {
        font-size: 16px;
        font-weight: 400;
    }

`;

export const StyledFormArea = styled.form`

    display: flex;
    flex-direction: column;
    gap: 30px;

    p {
        font-weight: 400;
        text-align: center;
        color: #4c4c4c
    }

    a {
        font-weight: 500;
        color: #4c4c4c;
        text-decoration: none;
        border-bottom: 1px solid #4c4c4c;
        padding-bottom: 2px;
    }
`;


