import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../home/footer/footer";
import GatosFiltrados from "../filtros/filtros"
import Card from "../card/Card"





export default function GatosRender() {
    return (
        <>
        <Navbar/>
        <div className="md:grid grid-cols-4">
        <div class="lg:sticky px-3 p-3 md:col-span-1 ">
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