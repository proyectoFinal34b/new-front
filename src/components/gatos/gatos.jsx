import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import SearchBar from "../searchbar/Searchbar"
import Footer from "../home/footer/footer";
import { Link } from "react-router-dom";
import GatosFiltrados from "../filtros/filtros"
import Card from "../card/Card"
import PostCats from "../form/FormularioCreacion";




export default function GatosRender({handlerDarkMode , darkMode}) {
    return (
        <>
        <Navbar handlerDarkMode={handlerDarkMode} darkMode={darkMode}/>
        <div className="md:grid grid-cols-4">
        <div class="lg:sticky lg:top-40 px-3 p-3 md:col-span-1 ">
            <GatosFiltrados />
        </div>
        <div className="md:col-span-3">
        <Card/>
        </div>
        </div>
        <Footer/>
        </>
    )
}