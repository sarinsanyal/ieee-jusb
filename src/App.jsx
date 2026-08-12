import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import MLAS4Popup from "./Components/MLAS4Popup";

function App() {
  return (
    <>
      <BrowserRouter>
        <MLAS4Popup />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
