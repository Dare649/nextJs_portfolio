"use client"

import Link from "next/link"
import Image from "next/image"
import dami from "../public/assets/images/dami.jpeg"
import { navlink } from "./dummy"
import Modal from "./Modal"
import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"

const Nav = ({children}) => {
  const [visible, setVisible] = useState(false);

  const handleVisible= () => {
    setVisible((prev)=>!prev);
  }
  return (
    <nav className="w-full h-full">

        {/* Desktop view */}
        
      <section className="hidden lg:flex lg:flex-col lg:w-full fixed top-0 z-50 bg-black">
          <div className="flex flex-row  items-center justify-between py-3 px-5">
            <Link href={"/"}>
              <Image
                src={dami}
                alt="damilare portfolio"
                width={20}
                height={20}
                className="w-20 h-20 rounded-full"
              />
            </Link>
            <div>
              {
                navlink.map((item, index) => (
                  <Link key={index} href={item.path} className="navLink text-red-500/40">
                    {item.title}
                  </Link>
                ))
              }
            </div>
          </div>
          <hr className="w-full h-1 bg-red-500 mt-2"/>
        </section>

        {/* Mobile view */}
        <section className="lg:hidden flex w-full relative z-50">
          <div className="bg-red-500 rounded-full fixed top-3 left-3">
            <CiMenuBurger size={30} className="p-2 font-bold text-lg" onClick={handleVisible}/>
          </div>
          {
            visible && 
              <Modal visible={visible}>
                <div className="bg-black w-[70%] h-full">
                  <div className="flex flex-row items-center justify-between py-4 px-2">
                    <Link href={"/"}>
                      <Image
                        src={dami}
                        alt="damilare portfolio"
                        width={10}
                        height={10}
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <h2 className="text-red-500 text-xl font-bold capitalize">damilare</h2>
                  </div>
                  <div className="flex flex-col p-3 w-full h-full overflow-y-scroll">
                    {
                      navlink.map((item, index) => (
                        <Link key={index} href={item.path} className="capitalize border-b-2 border-red-500 py-5 active:text-red-500 text-red-500/40" onClick={handleVisible}>
                          {item.title}
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </Modal>
          }
    </section>
    <div className='text-white lg:mt-40 sm:mt-20 overflow-y-scroll sm:px-4 lg:px-2'>
      {children}
    </div>
  </nav>
  )
}

export default Nav
