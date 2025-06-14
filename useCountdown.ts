import { useState, useEffect } from 'react';

interface CountdownReturn {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
}

export function useCountdown(targetDate: string): CountdownReturn {
  const [timeLeft, setTimeLeft] = useState<CountdownReturn>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      const birthday = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const timeDifference = birthday - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isToday: false
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isToday: true
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
