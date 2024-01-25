import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Events from './Components/Events';
import Advisors from './Components/Advisors';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/advisors' element={<Advisors/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
