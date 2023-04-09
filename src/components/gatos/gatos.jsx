import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import SearchBar from "../searchbar/Searchbar"
import Footer from "../home/footer/footer";
import { Link } from "react-router-dom";
import GatosFiltrados from "../filtros/filtros"
import Card from "../card/Card"
import PostCats from "../form/FormularioCreacion";




export default function GatosRender() {
    return (
        <div>
        <Navbar/>
        <div class="sticky top-3 flex justify-between items-center px-3 p-3">
            <GatosFiltrados />
            <PostCats />
        </div>
        <Card />
        <Footer/>
        </div>
    )
}