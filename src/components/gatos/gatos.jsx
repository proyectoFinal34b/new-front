import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../home/footer/footer";
import GatosFiltrados from "../filtros/filtros"
import Card from "../card/Card"
import BotonSup from "../support/buttonSup";





export default function GatosRender({handlerDarkMode , darkMode}) {
    return (
        <>
        <Navbar handlerDarkMode={handlerDarkMode} darkMode={darkMode}/>
        <div className="lg:grid grid-cols-4">
        <div class="lg:sticky lg:top-40 px-3 p-3 md:col-span-1 ">
            <GatosFiltrados />
        </div>
        <div className="md:col-span-3">
        <Card/>
        </div>
        </div>
        <BotonSup/>
        <Footer/>
        </>
    )
}