"use client"

import Image from "next/image"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect} from "react"

const Slide = ({slide, click, autoSlide = false, autoSlideInterval = 10000, }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => 
        setCurrent((current) => (current === 0 ? slide.length - 1: current - 1));
    
    const next = () =>
        setCurrent((current) => (current === slide.length -1 ? 0 : current + 1));

    useEffect(() => {
        if(!autoSlide) return 
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])
  return (
    <div className="flex flex-col items-center justify-center transition-transform ease-in-out duration 500 relative">
      {
        slide.map((item, idx) =>(
            <div key={idx} className="py-10">
                <Image src={item.image} alt={item.title} />
                <div className="">
                    <h2 className="font-bold text-red-500 text-xl capitalize">{item.title}</h2>
                    <p className="leading-relax tracking-wide first-letter:capitalize">{item.description}</p>
                    <a href={item.link} target="_blank" className="text-red-500/50 focus:text-red-500 hover:text-red-500 cursor-pointer mt-3">{click}</a>
                </div>
            </div> 
        ))
      }
      {/* <div className="absolute bottom-1 w-full flex items-center justify-center">
        <button onClick={prev} className="p-1 rounded-full shadow bg-red-500/40 text-white">
            <IoIosArrowBack size={40}/>
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-red-500/40 text-white">
            <IoIosArrowForward size={40}/>
        </button>
      </div> */}
    </div>
  )
}

export default Slide
