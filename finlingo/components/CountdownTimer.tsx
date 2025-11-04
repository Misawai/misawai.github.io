import React, { useState, useEffect } from 'react';
import { Translations } from '../localization';

interface CountdownTimerProps {
  t: Translations['zh'];
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ t }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const difference = tomorrow.getTime() - now.getTime();

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-slate-200 max-w-md mx-auto">
      <h3 className="font-bold text-slate-600 mb-2">{t.countdown.title}</h3>
      <div className="flex justify-center space-x-4 text-3xl font-extrabold text-slate-800">
        <div>{timeLeft.hours}</div>
        <span>:</span>
        <div>{timeLeft.minutes}</div>
        <span>:</span>
        <div>{timeLeft.seconds}</div>
      </div>
    </div>
  );
};
