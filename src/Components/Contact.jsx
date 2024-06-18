import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  const [data,setData]=useState({});
  const handleChange=(e)=>{
    setData({...data,[e.target.id]:e.target.value});


  }
  const sendMessage= async (e)=>{
    e.preventDefault();
    const res= await fetch("https://ieee-web-backend.onrender.com/api/data",{
      method:"POST",
      mode:"cors",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    });
    const msg= await res.json();
    // console.log(msg.message);
    alert(msg.message);
  };

  return (
    <div className="py-10 pt-[90px] font-Josefin dark:bg-[#002238]">
      {/* HEADER */}
      <h1 className="text-4xl text-sky-950 dark:text-white text-center font-extrabold">
        CONTACT US
      </h1>
      <hr className="w-28 h-1 mx-auto mt-3 bg-sky-950 dark:bg-white border-0"></hr>

      <div className="px-5 md:px-20 mt-20">
        <div className="md:flex">
          {/* GOOGLE MAPS */}

          <div id="google-maps-display" className="md:w-1/3">
            <iframe
              className="h-[400px] w-full"
              src="https://www.google.com/maps/embed/v1/place?q=Jadavpur+University,+Raja+Subodh+Chandra+Mallick+Road,+Jadavpur,+Kolkata,+West+Bengal,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>

          {/* INFORMATION SECTION */}
          <div className="md:w-2/3 h-[400px] bg-[#2b82b934] grid place-items-center">
            <div className="text-center dark:text-white">
              <h1 className="text-4xl font-bold">JADAVPUR UNIVERSITY</h1>
              <br />
              <p className="text-xl">
                {" "}
                Information Office <br />
                Ph:2457 - 2227 <br />
                Address <br />
                188, Raja S.c. Mallick Rd <br />
                Kolkata 700032. Ph:+9133-24146666
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10 gap-5">
          {/* FORM */}

          <div className="md:w-2/3 p-10 bg-gradient-to-bl from-white via-slate-300 to-slate-300 dark:from-[#2b82b934] dark:to-[#2b82b934] rounded-sm drop-shadow-xl">
            <form onSubmit={sendMessage} className="flex flex-col gap-5">
              <div className="flex gap-5">
                <input
                  onChange={handleChange}
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-1/2 p-3 rounded-lg border-2 border-black dark:bg-[#e0d8d8] dark:placeholder-black"
                />
                <input
                  onChange={handleChange}
                  id="email"
                  type="text"
                  placeholder="Your Email"
                  className="w-1/2 p-3 rounded-lg border-2 border-black dark:bg-[#e0d8d8] dark:placeholder-black"
                />
              </div>
              <input
                onChange={handleChange}
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border-2 border-black dark:bg-[#e0d8d8] dark:placeholder-black"
              />
              <textarea
                onChange={handleChange}
                name="message"
                placeholder="Messsage"
                id="message"
                cols="30"
                rows="8"
                className="w-full p-3 rounded-lg border-2 border-black dark:bg-[#e0d8d8] dark:placeholder-black"
              ></textarea>
              <button type="submit" className="text-white dark:text-[#183445] dark:font-bold font-semibold bg-blue-900 dark:bg-[#e0d8d8] px-5 py-2.5 mb-2 rounded transition-colors duration-150 ease-in-out hover:bg-blue-700 drop-shadow-md mx-auto w-36">Submit</button>
            </form>
            
          </div>

          {/* ADDRESS */}
          <div className="md:w-1/3 flex flex-col gap-5">
            <div className="p-5 bg-gradient-to-bl from-white via-slate-300 to-slate-300 dark:from-[#2b82b934] dark:to-[#2b82b934] rounded-sm drop-shadow-xl h-1/2 grid place-items-center">
              <div className="text-center">
                <span className="text-black dark:text-white text-2xl font-bold font-['Josefin Sans']">
                  Our Address
                  <br />
                </span>
                <span className="text-black dark:text-white text-md font-light font-['Josefin Sans']">
                  <br />
                  Jadavpur University
                  <br />
                  188, Raja S.C. Mallick Rd, Jadavpur
                  <br />
                  Kolkata-700032
                </span>
              </div>
            </div>

            {/* EMAIL */}
            <div className="p-5 bg-gradient-to-bl from-white via-slate-300 to-slate-300 dark:from-[#2b82b934] dark:to-[#2b82b934] rounded-sm drop-shadow-xl h-1/2 grid place-items-center">
            <MdOutlineEmail className="h-16 w-16 text-white"/>
              <div className="text-center">
                <span className="text-black dark:text-white text-2xl font-bold font-['Josefin Sans']">
                  Email Us
                  <br />
                </span>
                <span className="text-black dark:text-white text-md font-light font-['Josefin Sans']">
                  jaduniv.ieee@gmail.com
                  <br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
