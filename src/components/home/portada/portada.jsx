import React from 'react'




const Portada = () => {
    return (
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-4">
              <h1 className="text-4xl font-bold mb-4">BASTET</h1>
              <p></p>
              <h2 className="text-4xl font-bold mb-4">exceso de mimos</h2>
              <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://pngimg.es/d/cat_PNG50521.png" alt="Imagen" className="w-full h-auto" />
            </div>
          </div>
        </div>
      );
    }
  
  export default Portada;
