import styled from 'styled-components';

export const CounterContainer = styled.div` 
  display: inline-flex;
  align-items: stretch;
  border: 1.5px solid #c5c5c5;
  border-radius: 6px;
  overflow: hidden;
`;

export const ButtonCounter = styled.button`
  padding: 10px 16px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: #DB4444;
  color: #ffffff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #CC3F3F;
  }
`;

export const CountDisplay = styled.div`
  width: 80px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  font-size: 15px;
  text-align: center;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;
