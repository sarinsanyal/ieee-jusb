import React, { useState, useEffect, useRef } from "react";
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

  const rootEle = document.querySelector("#root");
  'themeDark' in localStorage||localStorage.setItem('themeDark',window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [themeDark, setThemeDark] = useState((localStorage.getItem('themeDark'))==='true');
  themeDark?rootEle.classList.add('dark'):rootEle.classList.remove('dark');
  
  useEffect(()=>{ //handling theme button click
    (rootEle.classList.contains('dark')&&!themeDark)&&rootEle.classList.remove('dark');
    (!(rootEle.classList.contains('dark'))&&themeDark)&&rootEle.classList.add('dark');
    localStorage.setItem('themeDark',themeDark);
  },[themeDark]);

  let [activeTab, setActiveTab] = useState(routes[0].id);

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
      className="sticky z-10 w-full top-0 flex flex-row justify-between pl-2 lg:px-4 drop-shadow-lg bg-gradient-to-r from-white to-cyan-100 dark:from-slate-900 dark:to-[#001b2d] transition-all h-[80px] font-Josefin"
    >
      <img src={logo} alt="IEE-JUSB" className="w-[200px] my-auto" />

      <div className="absolute top-[90vh] right-2 h-[34px] w-[34px] rounded-full border-2 border-slate-200 bg-slate-300 shadow-xl">
        <button
          className="m-auto"
          onClick={() => {
            setThemeDark(!themeDark);
          }}
        >
          {!themeDark ? <HiMoon size={25} className="mt-[3px] ml-[3px]" /> : <CiLight size={30} />}
        </button>
      </div>
      <button
        className="md:hidden absolute right-0 top-0 m-6"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation menu"
      >
        {navOpen ? <IoMdClose size={30} color={themeDark?"#075985":"black"} /> : <RxHamburgerMenu size={30} color={themeDark?"#075985":"black"} />}
      </button>

      <div className={`flex md:flex-row flex-col uppercase font-semibold font-Josefin text-sm my-auto md:mx-2 gap-4 md:w-auto ${themeDark? "nav-mobile-dark" : "nav-mobile"} ${
          navOpen ? "w-[50%]" : "w-0 overflow-hidden"
        } duration-500`} >
        
        {routes.map((route) => (
          <HashLink
  key={route.id}
  to={route.to}
  className={`${
    location.pathname === route.to ? "text-sky-800 font-bold" : ""
  } hover:text-sky-700 dark:text-sky-600 dark:hover:text-sky-400 duration-300 group`}
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
        : "w-0 sm:group-hover:w-[90%] dark:bg-sky-400"
    } duration-500 h-[2px] mx-auto bg-sky-700`}
  ></div>
</HashLink>
        ))}
      </div>
    </motion.div>
  );
}
