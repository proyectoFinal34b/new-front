import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../home/footer/footer";
import { Link } from "react-router-dom";
import cargando from "../../image/en-proceso.png"





export default function DonacionesRender() {
    return (
        <div>
            <Navbar/>
            <img src = {cargando} alt="" />
            {/* <Footer/> */}
        </div>
    )
}