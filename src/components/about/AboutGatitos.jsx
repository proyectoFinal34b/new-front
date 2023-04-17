import React from "react";
import { NavLink } from "react-router-dom";

function AboutGatitos() {
  return (
    <div className="flex justify-center items-center w-full h-screen mt-40 -mb-60">
      <a href="/gatos">
      <div className="max-w-screen-xl flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:w-1/2 h-96 relative">
          <img src="https://s3.ppllstatics.com/lasprovincias/www/multimedia/202201/24/media/cortadas/gato-gris-fotolia-kP4-U1606438615265ED-1248x770@Las%20Provincias.jpg" alt="Gatito" className="h-full w-full object-cover" />
          <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <NavLink to="/gatos"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Gatitos</button></NavLink>
         </div>
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Gatitos</h1>
          <p className="mt-7 text-lg text-gray-500 md:text-left">
            En esta sección van a poder encontrar todos los tipos de gatos que busquen que esten en adopcion para poderlos ayudar a encontrar una casa.
          </p>
        </div>
      </div>
      </a>
    </div>
  );
}

export default AboutGatitos;