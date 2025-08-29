import { useEffect, useState } from 'react';

const useFlashPromoCounter = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  const calculateSecondsUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    return Math.floor((midnight.getTime() - now.getTime()) / 1000);
  };

  useEffect(() => {
    setTimeRemaining(calculateSecondsUntilMidnight());

    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
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

  return { hours, minutes, seconds };
};

export default useFlashPromoCounter;
