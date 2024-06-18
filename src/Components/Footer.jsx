import React from 'react';
import jusb_logo from '../assets/img/jusb_logo.webp';
import { FaInstagram, FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./CSS/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="bg-sky-950 text-white font-Josefin">
        <div className="mx-auto w-full max-w-screen-xl p-4 sm:p-8 lg:p-16 py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-xl font-extrabold mb-3 underline-hover">IEEE JUSB</h4>
              <p className="mb-4">
                The Jadavpur University IEEE student branch, founded in 2010, belongs to the Kolkata section of Region 10 of the organization. We are a group of enthusiastic students who are promoting innovative ideas both within and outside the campus.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-extrabold mb-3 underline-hover">Useful Links</h4>
              <ul className="space-y-2">
                <li><a href="/#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Home</a></li>
                <li><a href="/#about" className="transition-colors duration-150 ease-in-out hover:text-blue-700">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-extrabold mb-3 underline-hover">Contact Us</h4>
              <p>
                Jadavpur University <br />
                188, Raja S.C. Mallick Rd, <br />
                Kolkata-700032 <br />
                India
              </p>
              <p className="mt-2">Phone: +91 98361 05125</p>
              <p>Email: <a href="mailto:jaduniv.ieee@gmail.com" className="transition-colors duration-150 ease-in-out hover:text-blue-700">jaduniv.ieee@gmail.com</a></p>
            </div>

            <div className='grid_icon'>
              <h4 className="text-xl font-extrabold mb-3 underline-hover">Follow Us</h4>
              <div className="grid grid-cols-2 gap-2 mt-4 mr-[156px] icons">
                <a href="https://twitter.com/IeeeJadavpur" className="w-8 h-8" target="blank"><BsTwitterX className="h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.facebook.com/ieeejusb" className="w-8 h-8" target="blank"><FaFacebook className="h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.instagram.com/_ieeeju/" className="w-8 h-8" target="blank"><FaInstagram className="h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.linkedin.com/company/ieee-ju" className="w-8 h-8" target="blank"><FaLinkedin className="h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center text-sm mt-4 h-[55px] border-t-2 border-solid border-orange-100">
            <p className='mt-2 mb-2'>© Copyright IEEE-JUSB. All Rights Reserved</p>
            <p>Made with <FaHeart className="inline text-red-500 mx-1" /> by IEEE JUSB</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

