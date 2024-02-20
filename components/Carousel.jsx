"use client"

import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image"

const Carousel = (
    {
        children: slides,
        autoSlide = false,
        autoSlideInterval = 10000,
    }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => 
        setCurrent((current) => (current === 0 ? slides.length - 1: current - 1));
    
    const next = () =>
        setCurrent((current) => (current === slides.length -1 ? 0 : current + 1));

    useEffect(() => {
        if(!autoSlide) return 
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])
  return (
    <div className="overflow-hidden relative">
        <div className="flex transition-transform w-full ease-out duration-500" style={{transform: `translate(-${current * 100}%)`}}>
            {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button onClick={prev} className="p-1 rounded-full shadow bg-red-500/40 text-white">
                <IoIosArrowBack size={40}/>
            </button>
            <button onClick={next} className="p-1 rounded-full shadow bg-red-500/40 text-white">
                <IoIosArrowForward size={40}/>
            </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0 gap-x-3">
            <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div className={`transition-all w-2 h-2 bg-red-500 rounded-full ${current === i ? "p-1": "bg-opacity-50"}`}>
                    
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Carousel
