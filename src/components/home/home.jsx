import React from "react";
import Footer from "./footer/footer";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Portada from "./portada/portada";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar/>
      <Portada/>
      <About/>
      <Footer/>
    </div>
  );
}
