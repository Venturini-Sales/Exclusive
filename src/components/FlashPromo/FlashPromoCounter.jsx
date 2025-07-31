import React, { useEffect, useState } from 'react';
import {
  Colon,
  CounterArea,
  CounterLabel,
  CounterNumberArea,
  CounterNumbers,
} from './styles';

const FlashPromoCounter = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  const calculateSecondsUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date();

    midnight.setHours(24, 0, 0, 0); // Próxima meia-noite

    return Math.floor((midnight.getTime() - now.getTime()) / 1000); // segundos restantes
  };

  useEffect(() => {
    setTimeRemaining(calculateSecondsUntilMidnight());

    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          // Quando chegar à meia-noite, reinicia
          return calculateSecondsUntilMidnight();
        }
        return prevTime - 1;
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
        <CounterNumbers>{String(hours).padStart(2, '0')}</CounterNumbers>
      </CounterNumberArea>
      <Colon>:</Colon>
      <CounterNumberArea>
        <CounterLabel>Minutos</CounterLabel>
        <CounterNumbers>{String(minutes).padStart(2, '0')}</CounterNumbers>
      </CounterNumberArea>
      <Colon>:</Colon>
      <CounterNumberArea>
        <CounterLabel>Segundos</CounterLabel>
        <CounterNumbers>{String(seconds).padStart(2, '0')}</CounterNumbers>
      </CounterNumberArea>
    </CounterArea>
  );
};

export default FlashPromoCounter;
