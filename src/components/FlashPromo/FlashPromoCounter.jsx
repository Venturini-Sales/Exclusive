import React from 'react';
import useFlashPromoCounter from './useFlashPromoCounter';
import {
  Colon,
  CounterArea,
  CounterLabel,
  CounterNumberArea,
  CounterNumbers,
} from './styles';

const FlashPromoCounter = () => {
  const { hours, minutes, seconds } = useFlashPromoCounter();

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
