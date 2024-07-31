import React, { useEffect, useState } from 'react';
import {
  Colon,
  CounterArea,
  CounterLabel,
  CounterNumberArea,
  CounterNumbers,
} from './styles';

const FlashPromoCounter = () => {
  const initialTime = 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  return (
    <CounterArea>
      <CounterNumberArea>
        <CounterLabel>Horas</CounterLabel>
        <CounterNumbers>{hours}</CounterNumbers>
      </CounterNumberArea>
      <Colon>:</Colon>
      <CounterNumberArea>
        <CounterLabel>minutos</CounterLabel>
        <CounterNumbers>{minutes}</CounterNumbers>
      </CounterNumberArea>
      <Colon>:</Colon>
      <CounterNumberArea>
        <CounterLabel>segundos</CounterLabel>
        <CounterNumbers>{seconds}</CounterNumbers>
      </CounterNumberArea>
    </CounterArea>
  );
};

export default FlashPromoCounter;
