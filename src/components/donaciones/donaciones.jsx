import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../home/footer/footer";
import cargando from "../../image/en-proceso.png"





export default function DonacionesRender({handlerDarkMode, darkMode}) {
    return (
        <div>
            <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
            <img src = {cargando} alt="" />
             <Footer/> 
        </div>
    )
}