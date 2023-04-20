import React from "react";
import Footer from "./footer/footer";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Portada from "./portada/portada";
import BotonSup from "../support/buttonSup";


export default function Home({handlerDarkMode , darkMode}) {
  return (
    <div className="bg-gray-200 dark:bg-bgDark">
      <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
      <Portada/>
      <About/>
      <BotonSup/>
      <Footer/>
    </div>
  );
}
