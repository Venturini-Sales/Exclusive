import React from 'react';
import { CounterContainer, CountDisplay, ButtonCounter } from './styles';

const Counter = ({ count, setCount }) => {
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <CounterContainer>
      <ButtonCounter onClick={decrement}>-</ButtonCounter>
      <CountDisplay>{count}</CountDisplay>
      <ButtonCounter red onClick={increment}>
        +
      </ButtonCounter>
    </CounterContainer>
  );
};

export default Counter;
