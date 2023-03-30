import React from "react";
import Footer from "./footer/footer";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Portada from "./portada/portada";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Portada/>
      <About/>
      <Footer/>
    </div>
  );
}
