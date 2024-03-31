import React, { useState, useEffect } from "react";
import logo from "../assets/RAW Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { HiMoon } from "react-icons/hi2";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

import "./CSS/Navbar.css";

let routes = [
  { id: "Home", to: "/" },
  { id: "About", to: "/#about" },
  { id: "Chapters", to: "/#chapters" },
  { id: "Events", to: "/events" },
  { id: "Sponsor", to: "/#sponsors" },
  { id: "Team", to: "/team" },
  { id: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [navOpen, setNavOpen] = useState(false);
  // const [themeDark, setThemeDark] = useState(false);
  let [activeTab, setActiveTab] = useState(routes[0].id);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 250) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky z-10 w-full top-0 flex flex-row justify-between pl-2 lg:px-4 drop-shadow-lg bg-gradient-to-r from-white to-cyan-100 h-[80px] font-Josefin"
    >
      <img src={logo} alt="IEE-JUSB" className="w-[200px] my-auto" />

      {/* <div className="absolute top-[90vh] right-2 h-[34px] w-[34px] rounded-full border-2 border-slate-200 bg-slate-300 shadow-xl">
        <button
          className="m-auto"
          onClick={() => {
            setThemeDark(!themeDark);
          }}
        >
          {themeDark ? <HiMoon size={30} /> : <CiLight size={30} />}
        </button>
      </div> */}

      <button
        className="md:hidden absolute right-0 top-0 m-6"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        {navOpen ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
      </button>

      <div
        className={`flex md:flex-row flex-col uppercase font-semibold font-Josefin text-sm my-auto md:mx-2 gap-4 md:w-auto nav-mobile ${
          navOpen
            ? "-md:animate-[width] duration-500 w-[50%]"
            : "w-0 -md:animate-[width] duration-500 overflow-hidden"
        }`}
      >
        {/* <NavLink to={"/#"}>Home</NavLink>
        <NavLink to={"/#about"} activeClassName="active">
          About
        </NavLink>
        <NavLink to={"/#chapters"}>Chapters</NavLink>
        <NavLink to={"/events"}>Events</NavLink>
        <NavLink to={"/#sponsors"}>Sponsors</NavLink>
        <NavLink to={"/team"}>Team</NavLink>
        <NavLink to={"/#contact"}>Contact</NavLink> */}

        {routes.map((routes) => (
          <HashLink
            key={routes.id}
            to={routes.to}
            className={`${
              location.pathname === routes.to ? "text-sky-800 font-bold" : ""
            } hover:text-sky-700 duration-300`}
          >
            {routes.id}
          </HashLink>
        ))}
      </div>
    </motion.div>
  );
}
