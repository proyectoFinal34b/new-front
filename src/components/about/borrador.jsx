import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <header>
        <h1 className="text-4xl font-bold mb-4">Acerca de nosotros</h1>
        <p className="text-lg">Somos una organización dedicada a rescatar gatitos...</p>
      </header>

      <section className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center mb-8">
          <img
            src="ruta-a-imagen-1.jpg"
            alt="Foto de gatito"
            className="w-1/2 mr-4 rounded-lg"
          />
          <div className="w-1/2">
            <p className="text-lg mb-4">Texto a la derecha de la imagen</p>
            <Link
              to="/donaciones"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded boton"
            >
              Apadriná a un gatito
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="w-1/2">
            <p className="text-lg mb-4">Texto a la izquierda de la segunda imagen</p>
            <Link
              to="/productos"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded boton"
            >
              Nuestra tienda
            </Link>
          </div>
          <img
            src="ruta-a-imagen-2.jpg"
            alt="Foto de tienda"
            className="w-1/2 ml-4 rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
