import React from "react";
import { NavLink } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="max-w-screen-xl flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Sobre nosotros</h1>
          <p className="mt-7 text-lg text-gray-500 md:text-left">
            En este apartado podras encontrar informacion sobre los creadores de este sitio web.
          </p>
        </div>
        <div className="md:w-1/2 h-auto relative">
          <img src="https://i.pinimg.com/originals/29/25/8b/29258b3af743172089a2db34a614fbf1.jpg" alt="Gatito" className="h-full w-full object-cover" />
          <NavLink to="/about-me"><button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Click</button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;