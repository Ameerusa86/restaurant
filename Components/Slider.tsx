"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SlideData } from "@/Data/data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SlideData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 lg:h-full lg:w-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {SlideData[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-xl">
          Oder Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 lg:h-full lg:w-1/2 w-full relative">
        <Image
          src={SlideData[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
