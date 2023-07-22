"use client";

import React from "react";
import Countdown from "react-countdown-simple";

type Rendered = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  className?: string;
};

const CountDown = () => {
  const endingDate = new Date("2023-08-01");

  const setDate = new Date(endingDate).toISOString();

  const renderer = ({ days, hours, minutes, seconds }: Rendered) => (
    <div>
      {days}:{hours}:{minutes}:{seconds}
    </div>
  );

  return (
    <div className="font-bold text-5xl text-yellow-300">
      <Countdown targetDate={setDate} renderer={renderer} />
    </div>
  );
};

export default CountDown;
