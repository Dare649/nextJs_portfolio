"use client"

import Carousel from "@components/Carousel"
import { projects } from "@components/dummy"
import tepnews from "@public/assets/images/tepnews.png"
import sell from "@public/assets/images/sell.png"
import mazaways from "@public/assets/images/mazaways.png"
import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6";


const Projects = () => {
  const slides = projects;
  return (
    <div className="lg:px-5 sm:px-2 flex items-center justify-center mx-40">
      <Carousel autoSlide={true} autoSlideInterval={8000} className="w-full">
        {
          slides.map((item) =>(
            <div key={item.id} className="w-full">
              <Image src={item.image} width={2500} height={200} alt={item.title} className="w-fit h-fit"/>
              <h2 className="capitalize font-bold text-red-500 text-xl mt-5">{item.title}</h2>
              <p className="my-2">{item.description}</p>
              <a href={item.link} target="_blank" className="text-red-500 hover:text-white flex items-center gap-3 cursor-pointer">click here<span><FaArrowRightLong/></span></a> 
            </div>
          ))
        }
        {/* {
          slides.map((item, index)=>(
            <Image key={index} src={item} width={2500} className="object-fit w-full"/>
          ))
        } */}
      </Carousel>
    </div>
  )
}

export default Projects
