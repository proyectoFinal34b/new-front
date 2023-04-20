import React from "react";
import { NavLink } from "react-router-dom";


function AboutTienda() {
  return (
    <div className="flex justify-center items-center w-full h-screen -mb-32">
      <a href="/productos">
      <div className="max-w-screen-xl flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:w-1/2 h-auto relative">
          <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/06/13153741/iStock-618341526.jpg" alt="Gatito" className="h-full w-full object-cover m-auto" />
          <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <NavLink to="/productos"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Tienda</button></NavLink>
         </div>
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Tienda</h1>
          <p className="mt-7 text-lg text-gray-500 md:text-left">
            En la tienda podremos encontrar productos relacionados a los gatos como juguetes, comida, limpieza etc, la mitad del dinero sera destinado a ayudar a los gatos en estado de calle.
          </p>
        </div>
      </div>
      </a>
    </div>
  );
}

export default AboutTienda;