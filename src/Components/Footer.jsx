// <------------------------ prev footer ------------------------>

// import React from 'react'
// import jusb_logo from '../assets/img/jusb_logo.webp'
// import {FaQuoteLeft, FaVoicemail,FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { Link } from 'react-router-dom';


// export default function Footer() {
//   return (
//     <div>
//       <footer className="bg-sky-950 text-white font-Josefin">
//         <div className="mx-auto w-full max-w-screen-xl p-16 py-6 lg:py-8">
//           <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-4">
            // <div className='mt-8'>
            //   <img src={jusb_logo} className="max-h-10 brightness-0 invert grayscale" alt="JUSB Logo" />
            // </div>
//             <div>
//               <h4 className="text-xl font-extrabold mt-4 mb-1">Contact Us</h4>
//               <h5 className="text-l font-bold">Address</h5>
//               <p>
//                 188, Raja Subodh Chandra Mallick Rd, <br />
//                 Jadavpur University Campus Area, <br />
//                 Jadavpur <br />
//                 Kolkata 700032, India.
//               </p>
//               <h5 className="text-l font-bold mt-2">Email</h5>
//               <a href='mailto:jaduniv.ieee@gmail.com'>jaduniv.ieee@gmail.com</a>

              
//             </div>
//             <div>
//               <h4 className="text-xl font-extrabold mt-4 mb-3">Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="/#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Home</a></li>
//                 <li><a href="/#about" className="transition-colors duration-150 ease-in-out hover:text-blue-700">About Us</a></li>
//                 <li><a href="/#chapters" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Branch Chapters</a></li>
//                 {/* <li><a href="/advisors" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Advisors</a></li> */}
//                 <li><Link to="/events" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Events</Link></li>
//                 <li><a href="/#sponsors" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Collaborators</a></li>
//                 <li><Link to="/team" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Team</Link></li>
//               </ul>
//             </div>
//             <div>

//               <h5 className="text-xl font-extrabold mt-4 mb-1">Socials</h5>
//               <div className="mt-3 flex flex-row sm:flex-col gap-4 sm:gap-2">
//                 <a href="https://twitter.com/IeeeJadavpur" target='blank'><BsTwitterX className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
//                 <a href="https://www.facebook.com/ieeejusb" target='blank'><FaFacebook className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
//                 <a href="https://www.instagram.com/_ieeeju/" target='blank'><FaInstagram className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
//                 <a href="https://www.linkedin.com/company/ieee-ju" target='blank'><FaLinkedin className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" /></a>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center items-center text-sm mt-4">
//             <p>
//               Made with <FaHeart className="inline text-red-500 mx-1" /> by Technical Team, IEEE JUSB
//             </p>
//           </div>

//         </div>
//       </footer>
//     </div>
//   )
// }


// <------------------------ new footer ------------------------>

import React from 'react'
import jusb_logo from '../assets/img/jusb_logo.webp'
import {FaQuoteLeft, FaVoicemail,FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row w-full">
          <div className="mb-4 md:mb-0 md:w-1/3 md:justify-center sm:justify-center sm:self-center">
            <h2 className="text-lg font-extrabold  pb-2">Links</h2>
            <ul className="space-y-2 text-gray-200">
              <li><a href="/#" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Home</a></li>
              <li><a href="/#about" className="transition-colors duration-150 ease-in-out hover:text-blue-700">About Us</a></li>
              <li><a href="/#chapters" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Branch Chapters</a></li>
              {/* <li><a href="/advisors" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Advisors</a></li> */}
              <li><Link to="/events" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Events</Link></li>
              <li><a href="/#sponsors" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Collaborators</a></li>
              <li><Link to="/team" className="transition-colors duration-150 ease-in-out hover:text-blue-700">Team</Link></li>
            </ul>
          </div>
          <div className="flex-grow flex-col flex justify-center items-center mt-8 md:mt-0 md:w-1/3">
            <FaQuoteLeft className='h-10 w-10 ' />
            <p className="italic text-center pt-5">An organization dedicated to advancing <br /> innovation and technological excellence for the benefit of humanity</p>
            {/* <p className="mt-2">Dr. Siegbert Tarrasch in 1931.</p> */}
          </div>
          <div className="mt-8 md:mt-0 text-center md:text-left md:w-1/3 flex flex-col items-center md:items-end">
            <div className="mt-8">
              <img src={jusb_logo} className="max-h-10 brightness-0 ml-4 mr-0 invert grayscale" alt="JUSB Logo" />
            </div>
            <div className="mt-4 pr-1 pl-2 text-right">
              <div className="flex justify-center md:justify-end items-center">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxklEQVR4nO2TQQrCMBBFg+4EPYBQvYJQ8BaCJ3DpFXoFr+DWpRsXnkIQPIMFD2DBneWVwgiphiYpAQXzISTMJP8nMz9KRfwMCAxlECgC8hcmgTGwC0B+BCYmgaHMSyDvQJzXZ3Wud4EbsJL1ANgATwfiEthqF1wA17Ym10+cSmwGnFrIL8BcK/H+lbC56AFkQB/oAWvgbsk3TOJq0zOQSj4BDjISiaWy5wM+/6CUGo+0vdYe+Qg0XOLqsi4CXogC/1iiiK+hAso/tYMhawO7AAAAAElFTkSuQmCC" />
                <a href='mailto:jaduniv.ieee@gmail.com' className="ml-2 my-3">jaduniv.ieee@gmail.com</a>
              </div>
              <address className="not-italic mt-2 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 pr-1">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>


  <div>
    188,Raja Subodh Chandra Mallick Rd, <br />
    Jadavpur University Campus Area, <br />
    Jadavpur <br />
    Kolkata 700032, India.
  </div>
</address>

            </div>
            <span className="block h-px bg-slate-500 mt-3 w-72"></span>
            <div className="mt-3 flex justify-center md:justify-end space-x-12">
              <a href="https://twitter.com/IeeeJadavpur" target="_blank" rel="noopener noreferrer">
                <BsTwitterX className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" />
              </a>
              <a href="https://www.facebook.com/ieeejusb" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" />
              </a>
              <a href="https://www.instagram.com/_ieeeju/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" />
              </a>
              <a href="https://www.linkedin.com/company/ieee-ju" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="my-2 h-8 w-8 transition-colors duration-150 ease-in-out hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="block h-px bg-slate-500"></span>
      <div className="bg-sky-950 py-4 text-center">
        <p>
          Made with <FaHeart className="inline text-red-500 mx-1" /> by Technical Team, IEEE JUSB
        </p>
      </div>
    </footer>
  );
};

export default Footer;
