import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../home/footer/footer";
import { Link } from "react-router-dom";
import cargando from "../../image/en-proceso.png"


export default function DetailCat(){
    return(
        <div>
            <div>
            <Navbar/>
            <img src = {cargando} alt="" />
            {/* <Footer/> */}
        </div>
        </div>
    )
}