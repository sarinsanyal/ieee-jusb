import React from 'react'
import herobg from "../assets/img/12339248_945275338898078_4922629178692393455_o.jpg"

export default function Hero() {
  return (
    <div className='bg-transparent' >
      <img src={herobg} className='object-cover w-full h-[500px] opacity-[0.8]'/>
      <div className='hero-title flex flex-col border-r-[10px] border-x-[#0D4C72] w-[330px] md:w-[500px] text-right pr-2 absolute top-[330px] right-[5%] font-semibold font-Josefin gap-y-4'>
        <div className='text-4xl md:text-5xl text-black '>
          Jadavpur University


        </div>
        <div className='text-4xl md:text-5xl text-[#0D4C72]'>
          Student Branch

        </div>
      </div>

      
    </div>
  )
}
