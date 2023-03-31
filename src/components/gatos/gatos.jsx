import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import SearchBar from "../searchbar/Searchbar"
import Footer from "../home/footer/footer";
import { Link } from "react-router-dom";




export default function GatosRender() {
    return (
        <div>
        <Navbar/>
        <SearchBar/>
        {/* <Footer/> */}
        </div>
    )
}