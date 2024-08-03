"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold h-14 w-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-green)] to-[var(--color-green-light)] shadow-md">
        <span className="bg-clip-text text-transparent bg-white">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );

  return (
    <div className="inline-block bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl shadow-xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex gap-3">
        <TimeUnit value={timeLeft.days} label="Jours" />
        <TimeUnit value={timeLeft.hours} label="Heures" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
};

export default Countdown;
