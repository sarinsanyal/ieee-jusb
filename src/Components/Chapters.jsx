import React from "react";

export default function Chapters() {
  return (
    <div className="py-10 pt-[90px] md:h-[900px] bg-[url('/chapters/chapters-bg.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url('/chapters/chapters-bg.jpg')] bg-no-repeat bg-cover font-Josefin">
      {/* HEADER */}
      <h1 className="text-4xl text-sky-950 dark:text-white text-center font-extrabold">
        STUDENT BRANCH CHAPTERS
      </h1>
      <hr className="w-28 h-1 mx-auto mt-3 bg-sky-950 dark:bg-white border-0"></hr>

      {/* BRANCH CHAPTERS */}
      <div className="px-50 md:py-32 flex flex-col md:flex-row flex-wrap justify-center items-center font-Josefin">
        <div className="md:w-1/3 py-10 md:py-0 flex flex-col items-center md:justify-end md:h-64">
          <img src="/chapters/cs.png" alt="" className="mb-5"/>
          <p className="font-bold text-center text-2xl">Computer Society <br /> Students Branch Chapter, <br /> C16</p>
        </div>
        <div className="md:w-1/3 py-10 md:py-0 flex flex-col items-center md:justify-end md:h-64">
          <img src="/chapters/ias.png" alt="" className="mb-5"/>
          <p className="font-bold text-center text-2xl">Industrial Application <br /> Students Branch Chapter, <br /> IA34</p>
        </div>
        <div className="md:w-1/3 py-10 md:py-0 flex flex-col items-center md:justify-end md:h-64">
          <img src="/chapters/pes.png" alt="" className="mb-5"/>
          <p className="font-bold text-center text-2xl">Power & Energy Society <br /> Students Branch Chapter, <br /> PE31</p>
        </div>
        <div className="md:w-1/3 py-10 md:py-0 flex flex-col items-center md:justify-end md:h-64">
          <img src="/chapters/wie.png" alt="" className="mb-5"/>
          <p className="font-bold text-center text-2xl">Women in Engineering <br /> Students Branch Chapter, <br /> WIE</p>
        </div>
        <div className="md:w-1/3 py-10 md:py-0 flex flex-col items-center md:justify-end md:h-64">
          <img src="/chapters/comsoc.png" alt="" className="mb-5"/>
          <p className="font-bold text-center text-2xl">Communication Society <br /> Students Branch Chapter, <br /> COM19</p>
        </div>
        <div className="md:w-1/3 py-10 md:py-0 flex flex-col items-center md:justify-end md:h-64">
          <img src="/chapters/sps.png" alt="" className="mb-5" height={220} width={220}/>
          <p className="font-bold text-center text-2xl">Signal Processing Society <br /> Students Branch Chapter,<br /> SPS </p>
          
        </div>
      </div>
    </div>
  );
}
