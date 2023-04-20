import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import DetailGatosFilter from "../filtros/filtrosCatsDetail"
import SearchBar from "../../searchbar/Searchbar"
import Footer from "../../home/footer/footer";
import { Link } from "react-router-dom";
import GatosFiltrados from "../../filtros/filtros"
import Card from "../../card/Card"

export default function DetailGatos({handlerDarkMode, darkMode}) {
    return (
        <>
        <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
        <DetailGatosFilter/>
        <Footer/>
        </>
    )
}