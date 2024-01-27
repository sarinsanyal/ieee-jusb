// import React from "react";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 mx-auto py-20">
      <div className="card relative w-[90%] h-[40rem] border-2 rounded-lg overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="image_container w-full overflow-hidden">
          <img
            src="../../public/events/double.webp"
            className="w-full hover:scale-110 duration-300"
            alt=""
          />
        </div>

        <div className="w-[96%] px-4 flex flex-col gap-4 pt-4">
          <p className="relative font-Inclusive text-4xl">Hello IEEE</p>
          <hr className="relative border-slate-700 border-2" />
          <p className="relative font-Josefin text-lg">
            Unrivaled and unparalleled, Hello-IEEE stands true to its name:
            Introducing the myriad boons of IEEE to young enthusiasts yet to
            blossom into leaders of tomorrow and seamlessly bridging the gap
            between industry and academia through its unique array of events.
          </p>
        <Link to={"https://ieee-jaduniv.in/hello-IEEE/"} target="_blank" className="text-black bg-cyan-500 rounded-md hover:bg-cyan-700 duration-200 mx-auto px-6 py-3 font-Josefin font-semibold text-lg">Website</Link>
        </div>

        <div className="absolute bottom-0 w-full bg-white px-4 py-2 font-Inclusive text-lg border-t-2">Date: 18th December, 2020</div>
      </div>
  
    </div>
  );
}
