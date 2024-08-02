"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const TimeUnit = ({
    value,
    label,
    prevValue,
  }: {
    value: number;
    label: string;
    prevValue: number;
  }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="text-4xl font-bold h-16 w-16 relative overflow-hidden rounded-lg bg-gradient-to-br from-[var(--color-green)] to-[var(--color-green-light)] shadow-md">
        <AnimatePresence mode="popLayout">
          {value !== prevValue && (
            <motion.span
              key={value}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[var(--color-green)] to-[var(--color-green-light)] text-transparent bg-clip-text"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {value.toString().padStart(2, "0")}
            </motion.span>
          )}
        </AnimatePresence>
        <span className="absolute inset-0 flex items-center justify-center bg-white  text-transparent bg-clip-text">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );

  return (
    <div className="inline-flex bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl shadow-xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex">
        <TimeUnit
          value={timeLeft.days}
          label="Days"
          prevValue={timeLeft.days}
        />
        <TimeUnit
          value={timeLeft.hours}
          label="Hours"
          prevValue={timeLeft.hours}
        />
        <TimeUnit
          value={timeLeft.minutes}
          label="Minutes"
          prevValue={timeLeft.minutes}
        />
        <TimeUnit
          value={timeLeft.seconds}
          label="Seconds"
          prevValue={timeLeft.seconds}
        />
      </div>
    </div>
  );
};

export default Countdown;
