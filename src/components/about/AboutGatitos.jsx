import React from "react";
import { NavLink } from "react-router-dom";

function AboutGatitos() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="max-w-screen-xl flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:w-1/2 h-auto relative">
          <img src="https://s3.ppllstatics.com/lasprovincias/www/multimedia/202201/24/media/cortadas/gato-gris-fotolia-kP4-U1606438615265ED-1248x770@Las%20Provincias.jpg" alt="Gatito" className="h-full w-full object-cover" />
          <NavLink to="/gatos"><button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Adoptar</button></NavLink>
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Gatitos</h1>
          <p className="mt-7 text-lg text-gray-500 md:text-left">
            En esta sección van a poder encontrar todos los tipos de gatos que busquen que esten en adopcion para poderlos ayudar a encontrar una casa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutGatitos;