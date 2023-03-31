import React from 'react'




const Portada = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
      <div className="absolute bottom-20 left-14 w-8 h-14 rounded-full bg-teal-300 opacity-40 z-0 mix-blend-multiply"></div>
      <div className="absolute bottom-30 left-14 w-24 h-24 rounded-full bg-teal-700 opacity-40 z-0 mix-blend-multiply"></div>
      <div className="absolute top-20 right-20 w-14 h-8 rounded-full bg-teal-400 opacity-40 z-0 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2 md:pr-4 relative flex justify-center items-center flex-col">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-9xl">BASTET</h1>
            <h2 className="text-3xl font-extrabold text-gray-700 sm:text-5xl">exceso de mimos</h2>
            <p className="mt-7 text-gray-500 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-teal-600 opacity-40 z-0 mix-blend-multiply"></div>
            <img src="https://pngimg.es/d/cat_PNG50521.png" alt="Imagen" className="w-full h-auto z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
  
  export default Portada;
