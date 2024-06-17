import React from 'react'
import jusb_logo from '../assets/img/jusb_logo.webp'
import {FaQuoteLeft, FaVoicemail,FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div>
      <footer className="bg-sky-950 text-white font-Josefin">
        <div className="mx-auto w-full max-w-screen-xl p-16 py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-4">
            <div className='mt-8'>
              <img src={jusb_logo} className="max-h-10 brightness-0 invert grayscale" alt="JUSB Logo" />
            </div>
            <div>
              <h4 className="text-xl font-extrabold mt-4 mb-1">Contact Us</h4>
              <h5 className="text-l font-bold">Address</h5>
              <p>
                188, Raja Subodh Chandra Mallick Rd, <br />
                Jadavpur University Campus Area, <br />
                Jadavpur <br />
                Kolkata 700032, India.
              </p>
              <h5 className="text-l font-bold mt-2">Email</h5>
              <a href='mailto:jaduniv.ieee@gmail.com'>jaduniv.ieee@gmail.com</a>

              
            </div>
            <div>
              <h4 className="text-xl font-extrabold mt-4 mb-3">Links</h4>
              <ul className="space-y-2">
                <li><a href="/#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Home</a></li>
                <li><a href="/#about" className="transition-colors duration-150 ease-in-out hover:text-blue-700">About Us</a></li>
                <li><a href="/#chapters" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Branch Chapters</a></li>
                {/* <li><a href="/advisors" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Advisors</a></li> */}
                <li><Link to="/events" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Events</Link></li>
                <li><a href="/#sponsors" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Collaborators</a></li>
                <li><Link to="/team" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Team</Link></li>
              </ul>
            </div>
            <div>

              <h5 className="text-xl font-extrabold mt-4 mb-1">Socials</h5>
              <div className="mt-3 flex flex-row sm:flex-col gap-4 sm:gap-2">
                <a href="https://twitter.com/IeeeJadavpur" target='blank'><BsTwitterX className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.facebook.com/ieeejusb" target='blank'><FaFacebook className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.instagram.com/_ieeeju/" target='blank'><FaInstagram className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.linkedin.com/company/ieee-ju" target='blank'><FaLinkedin className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-sm mt-4">
            <p>
              Made with <FaHeart className="inline text-red-500 mx-1" /> by Technical Team, IEEE JUSB
            </p>
          </div>

        </div>
      </footer>
    </div>
  )
}

