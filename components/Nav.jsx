"use client"

import { navlink } from "./dummy";
import Image from "next/image";
import dami from "@public/assets/images/dami.jpeg";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-scroll";


const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen((prev)=>!prev)
  }
  return (
    <section className="w-full flex items-center justify-between p-3 ">
      <MdMenu
        className="absolute top-2 left-2 text-white sm:visible lg:hidden"
        size={30}
        onClick={handleOpen}
      />
      <div >
        <Image
          width="fill"
          alt="damilare portfolio"
          src={dami}
          className="profileImg w-32 h-32 rounded-full"
        />
      </div>
      {
        !open ? 
        (<ul className="flex lg:flex-row sm:flex-col">
        {
            navlink.map((item, id) => (
                <Link className="navlink mx-5 my-5 text-white capitalize text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 cursor-pointer" 
                key={id} to={item.path} spy={true} smooth={true} offset={50} duration={500} >
                  {item.title}
                </Link>
            ))
        }
      </ul>):
        ('')
      }
    </section>
  )
}

export default Nav
