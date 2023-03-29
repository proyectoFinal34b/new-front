import React from "react";
import Footer from "./footer/footer";
import Navbar from "../navbar/Navbar";
import About from "../about/About";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  );
}
