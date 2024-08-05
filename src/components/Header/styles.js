import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 0.5px solid #00000050;
  background-color: #ffffff;
  color: #000000;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 38px;
  padding-bottom: 10px;

  div:nth-child(1) {
    text-align: center;
    flex: 1;
    font-size: 24px;
    font-weight: 700;
  }

  div:nth-child(2) {
    text-align: center;
    flex: 1;
    ul {
      display: flex;
      gap: 30px;
      justify-content: center;
    }

    li {
      font-size: 16px;
      font-weight: 400;
      list-style: none;
      cursor: pointer;
    }
  }

  div:nth-child(3) {
    flex: 1;
  }
`;

export const StyledInput = styled.div`
  background-color: #f5f5f5;
  color: #000000;
  width: 242px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 15px;
  border-radius: 5px;

  input {
    background-color: transparent;
    outline: none;
    border: none;
  }

  svg {
    cursor: pointer;
  }
`;