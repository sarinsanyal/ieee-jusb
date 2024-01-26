import React, {useState, useEffect} from 'react';
import logo from '../assets/RAW Logo.png';
import { Link, NavLink} from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import './CSS/Navbar.css';

export default function Navbar() {

  const [navOpen, setNavOpen]= useState(false);

  return (
    <div className='sticky z-10 w-full top-0 flex flex-row justify-between bg-gradient-to-r from-white to-cyan-100 h-[50px]'>
      <img src={logo} alt="IEE-JUSB" className='w-[200px] my-auto'/>
      <button className='md:hidden absolute right-0 top-0 m-4' onClick={()=>{setNavOpen(!navOpen)}}>
        {navOpen ? <IoMdClose/>: <RxHamburgerMenu/>}
      </button>
      <div className={`md:flex md:flex-row flex-col uppercase font-semibold text-xs my-auto md:mx-2 gap-4 nav-mobile ${navOpen?"flex":"hidden"}`}>
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
