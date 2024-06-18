import React from 'react'
import herobg from "../assets/img/12339248_945275338898078_4922629178692393455_o.jpg"

export default function Hero() {
  return (
    <div className='bg-transparent dark:bg-black' >
      <img src={herobg} className='object-cover w-full h-[100vh] opacity-[0.8] dark:opacity-[0.35]'/>
      <div className='hero-title flex flex-col border-r-[10px] border-x-[#0D4C72] dark:border-x-[#309ece] w-[330px] md:w-[500px] text-right pr-2 absolute top-[60vh] right-[5%] font-semibold font-Josefin gap-y-4'>
        <div className='text-4xl md:text-5xl text-black dark:text-white'>
          Jadavpur University


        </div>
        <div className='text-4xl md:text-5xl text-[#0D4C72] dark:text-[#38BDF8]'>
          Student Branch

        </div>
      </div>

      
    </div>
  )
}
