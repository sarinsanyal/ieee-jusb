import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Events from './Components/Events';

function App() {

  // const location = useLocation();
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <AnimatePresence mode='wait'>
        <Routes >
          <Route path='/*' element={<Home/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/events' element={<Events/>}/>
        </Routes>
        </AnimatePresence>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
