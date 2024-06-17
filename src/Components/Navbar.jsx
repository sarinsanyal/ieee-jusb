import React, { useState, useEffect } from "react";
import logo from "../assets/RAW Logo.png";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import "./CSS/Navbar.css";

const routes = [
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [navOpen, setNavOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest > scrollY.getPrevious() && latest > 250);
  });

  const handleNavClick = () => {
    if (isMobile) {
      setNavOpen(false);
    }
  };

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden && !isMobile ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky z-10 w-full top-0 flex flex-row justify-between pl-2 lg:px-4 drop-shadow-lg bg-gradient-to-r from-white to-cyan-100 h-[80px] font-Josefin"
    >
      <img src={logo} alt="IEE-JUSB" className="w-[200px] my-auto" />

      <button
        className="md:hidden absolute right-0 top-0 m-6"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation menu"
      >
        {navOpen ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
      </button>

      <div
        className={`flex md:flex-row flex-col uppercase font-semibold text-sm my-auto md:mx-2 gap-4 md:w-auto nav-mobile ${
          navOpen ? "w-[50%]" : "w-0 overflow-hidden"
        } duration-500`}
      >
        {routes.map((route) => (
          <HashLink
  key={route.id}
  to={route.to}
  className={`${
    location.pathname === route.to ? "text-sky-800 font-bold" : ""
  } hover:text-sky-700 duration-300 group`}
  smooth
  scroll={(el) =>
    window.scrollTo({
      top: el.offsetTop - 80, // Adjust this value according to your header height
      behavior: "smooth",
    })
  }
  onClick={handleNavClick}
>
  {route.id}
  <div
    className={`r ${
      location.pathname === route.to
        ? "w-[30%] sm:w-[90%]"
        : "w-0 sm:group-hover:w-[90%]"
    } duration-500 h-[2px] mx-auto bg-sky-700`}
  ></div>
</HashLink>

        ))}
      </div>
    </motion.div>
  );
}
