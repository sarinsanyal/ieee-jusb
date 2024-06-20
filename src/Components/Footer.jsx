import React from 'react';
import jusb_logo from '../assets/img/jusb_logo.webp';
import { FaInstagram, FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { HashLink } from 'react-router-hash-link';
import "./CSS/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="bg-sky-950 text-white font-Josefin pb-5 pt-9 ">
        <div className="footer-grid mb-4 w-[90vw]  mx-auto gap-[15px] lg:gap-[20px]  ">
          <div className="footer-div">
            <h4 className="footer-header">IEEE JUSB</h4>
            <p className="text-[16px] list-items">
              The Jadavpur University IEEE student branch, founded in 2010,
              belongs to the Kolkata section of Region 10 of the organization.
              We are a group of enthusiastic students who are promoting
              innovative ideas both within and outside the campus.
            </p>
          </div>
          <div className="footer-div">
            <h4 className="footer-header">Useful Links</h4>
            <div className="list-div ">
            <HashLink smooth to="/" className="list-items hover-link">
                Homes
            </HashLink>
            <HashLink smooth to="/#about" className="list-items hover-link">
                About Us
            </HashLink>
            <HashLink smooth to="/#chapters" className="list-items hover-link">
                Chapters
            </HashLink>
            <HashLink smooth to="/events" className="list-items hover-link">
                Events
            </HashLink>
            <HashLink smooth to="/#sponsors" className="list-items hover-link">
                Sponsors
            </HashLink>
            <HashLink smooth to="/team" className="list-items hover-link">
                Team
            </HashLink>
            </div>
          </div>
          <div className="footer-div">
            <h4 className="footer-header">Contact Us</h4>
            <p className="list-items">
              Jadavpur University 188, Raja S.C. Mallick Rd, Kolkata-700032
              India
            </p>
            <p className="list-items">Phone: +91 98361 05125</p>
            <p className="list-items">Email: <HashLink to="mailto:jaduniv.ieee@gmail.com">jaduniv.ieee@gmail.com</HashLink></p>
          </div>
          <div className="footer-div">
            <h4 className="footer-header">Follow Us</h4>
            <div className="grid grid-cols-4 items-center place-items-center max-w-[220px] mx-auto lg:place-items-start lg:mx-0 ">
                <HashLink
                  to="https://twitter.com/IeeeJadavpur"
                  target="blank"
                >
                  <BsTwitterX className="footer-icons transition-colors duration-150 ease-in-out hover:text-blue-700" />
                </HashLink>
                <HashLink
                  to="https://www.facebook.com/ieeejusb"
                  target="blank"
                >
                  <FaFacebook className="footer-icons transition-colors duration-150 ease-in-out hover:text-blue-700" />
                </HashLink>
                <HashLink
                  to="https://www.instagram.com/_ieeeju/"
                  target="blank"
                >
                  <FaInstagram className="footer-icons transition-colors duration-150 ease-in-out hover:text-blue-700" />
                </HashLink>
                <HashLink
                  to="https://www.linkedin.com/company/ieee-ju"
                  target="blank"
                >
                  <FaLinkedin className="footer-icons transition-colors duration-150 ease-in-out hover:text-blue-700" />
                </HashLink>
              </div>
          </div>
        </div>
        <div className="mx-auto h-[2px] w-[90vw] bg-white rounded"></div>
        <div className="flex flex-col justify-between items-center text-sm mt-3 h-[55px]">
          <p className="mt-2 mb-2">
            © Copyright IEEE-JUSB. All Rights Reserved
          </p>
          <p className="mb-5">
            Made with <FaHeart className="inline text-red-500 mx-1" /> by IEEE
            JUSB
          </p>
        </div>
      </footer>
    </div>
  );
}
