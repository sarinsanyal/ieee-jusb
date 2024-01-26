import React from 'react'
import jusb_logo from '../assets/img/jusb_logo.webp'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
      <footer className="bg-sky-950 text-white">
        <div className="mx-auto w-full max-w-screen-xl p-16 py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-2">
            <div>
              <img src={jusb_logo} className="max-h-10 brightness-0 invert grayscale" alt="JUSB Logo" />
            </div>
            <div />
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
              <p>jaduniv.ieee@gmail.com</p>

              <h5 className="text-l font-bold mt-2">Socials</h5>
              <div className="mt-3 flex space-x-4">
                <a href="https://twitter.com/IeeeJadavpur"><FaTwitter className="h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.facebook.com/ieeejusb"><FaFacebook className="h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.instagram.com/_ieeeju/"><FaInstagram className="h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
                <a href="https://www.linkedin.com/company/ieee-ju"><FaLinkedin className="h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-extrabold mt-4 mb-3">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Home</a></li>
                <li><a href="#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">About Us</a></li>
                <li><a href="#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Branch Chapters</a></li>
                <li><a href="#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Advisors</a></li>
                <li><a href="#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Events</a></li>
                <li><a href="#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Collaborators</a></li>
                <li><a href="#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Team</a></li>
              </ul>
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
