import React from "react";
import { NavLink } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <a href="/about-us">
      <div className="max-w-screen-xl flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Sobre nosotros</h1>
          <p className="mt-7 text-lg text-gray-500 md:text-left">
            En este apartado podras encontrar informacion sobre los creadores de este sitio web.
          </p>
        </div>
        <div className="md:w-1/2 h-full relative">
          <img src="https://i.pinimg.com/originals/29/25/8b/29258b3af743172089a2db34a614fbf1.jpg" alt="Gatito" className="h-full w-full object-cover m-auto" />
          <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <NavLink to="/about-us"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Nosotros</button></NavLink>
          </div>
        </div>
      </div>
      </a>
    </div>
  );
}

export default AboutMe;