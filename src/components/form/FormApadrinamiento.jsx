import React from "react";
import Contacto from "../login/Contacto";



export default function FormApadrinamiento() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex items-center">
        <div className="w-1/2">
          <p class="text-gray-900 text-lg text-justify my-4 p-4 border border-gray-300 bg-gray-200">
            Si estás interesado en apadrinar un gato, ¡felicidades por tu decisión! 
            El apadrinamiento es una forma maravillosa de ayudar a un gato necesitado
             a tener una vida mejor. Como padrino, tendrás la oportunidad de hacer 
             una gran diferencia en la vida de un gato proporcionándole cuidados y 
             amor. Si estás listo para apadrinar, te invitamos a llenar nuestro 
             formulario para que podamos ponernos en contacto contigo. 
             ¡Gracias por considerar apadrinar a un gato!</p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Contacto />
        </div>
      </div>
    </div>
  );
}
