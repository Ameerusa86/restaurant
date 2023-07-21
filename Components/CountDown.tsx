"use client";

import React from "react";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";

const endingDate = new Date("2023-08-01");

const CountDown = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Countdown
        className="font-bold text-5xl text-yellow-300"
        date={endingDate}
      />
      <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>
    </>
  );
};

export default CountDown;
