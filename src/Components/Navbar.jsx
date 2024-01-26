import React, {useState, useEffect} from 'react';
import logo from '../assets/RAW Logo.png';
import { Link, NavLink} from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi2";

import './CSS/Navbar.css';

export default function Navbar() {

  const [navOpen, setNavOpen]= useState(false);
  const [themeDark, setThemeDark]= useState(false);

  return (
    <div className='sticky z-10 w-full top-0 flex flex-row justify-between drop-shadow-lg bg-gradient-to-r from-white to-cyan-100 h-[80px]'>
      <img src={logo} alt="IEE-JUSB" className='w-[200px] my-auto'/>
      {/* <div className='absolute right-0 top-0 m-6'> */}
      <div className='absolute top-[90vh] right-2 h-[34px] w-[34px] rounded-full border-2 border-slate-200 bg-slate-300 shadow-xl'>
        <button className='m-auto' onClick={()=>{setThemeDark(!themeDark)}}>
          {themeDark ? <HiMoon size={30}/> : <CiLight size={30}/>}
        </button>
      </div>
        <button className='md:hidden absolute right-0 top-0 m-6' onClick={()=>{setNavOpen(!navOpen)}}>
          {navOpen ? <IoMdClose size={30}/> : <RxHamburgerMenu size={30}/>}
        </button>
      {/* </div> */}
      <div className={`md:flex md:flex-row flex-col uppercase font-semibold text-sm my-auto md:mx-2 gap-4 nav-mobile ${navOpen?"flex":"hidden"}`}>
        <NavLink to={'/#'} 
          className={({isActive})=>{
          if(isActive){ return "active"}
          else{return ""}}}>Home</NavLink>
        <HashLink to={"/#about"} activeClassName='active'>About</HashLink>
        <HashLink to={'/#chapters'} >Chapters</HashLink>
        <NavLink to={'/advisor'} 
          className={({isActive})=>{
          if(isActive){ return "active"}
          else{return ""}}}>Advisors</NavLink>
        <NavLink to={'/events'} 
          className={({isActive})=>{
          if(isActive){ return "active"}
          else{return ""}}}>Events</NavLink>
        <HashLink to={'/#sponsors'} >Sponsors</HashLink>
        <NavLink to={'/team'} 
          className={({isActive})=>{
          if(isActive){ return "active"}
          else{return ""}}}>Team</NavLink>
        <HashLink to={'/#contact'} >Contact</HashLink>
      </div>
    </div>
  )
}
