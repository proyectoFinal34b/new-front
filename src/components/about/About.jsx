import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center rounded-md overflow-hidden shadow-lg border border-gray-200">
          <div className="bg-gradient-to-r from-blue-200 to-purple-200 p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sobre nosotros
            </h2>
            <p className="mt-4 text-gray-500 sm:text-xl">
              En nuestro sitio web, podes encontrar información detallada sobre
              los gatos que hemos rescatado y que están buscando un hogar
              amoroso. También podes apadrinar a uno de nuestros gatos y
              ayudarnos a cuidar de ellos mientras esperan su adopción. Además,
              ofrecemos la posibilidad de comprar productos para tus mascotas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
