import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import SearchBar from "../searchbar/Searchbar"
import Footer from "../home/footer/footer";
import { Link } from "react-router-dom";
import GatosFiltrados from "../filtros/filtros"
import Card from "../card/Card"




export default function GatosRender() {
    return (
        <div>
        <Navbar/>
        <SearchBar/>
        <GatosFiltrados />
        <Card />
        <Footer/>
        </div>
    )
}