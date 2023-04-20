import React from "react";
import Contacto from "../login/Contacto";



export default function FormApadrinamiento() {
  return (
    <div class="w-sm flex  h-screen rounded overflow-hidden shadow-lg bg-gray-800">
    <div class="font-bold text-xl mb-2 text-gray-200 bg-gray-700">Apadrinar</div>
    <p class="text-gray-200 text-base">
            Si estás interesado en apadrinar un gato, ¡felicidades por tu decisión! 
            El apadrinamiento es una forma maravillosa de ayudar a un gato necesitado
             a tener una vida mejor. Como padrino, tendrás la oportunidad de hacer 
             una gran diferencia en la vida de un gato proporcionándole cuidados y 
             amor. Si estás listo para apadrinar, te invitamos a llenar nuestro 
             formulario para que podamos ponernos en contacto contigo. 
             ¡Gracias por considerar apadrinar a un gato!
    </p>
  <div class="pt-1">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#apadrinamiento</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gatitos</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#donacion</span>
  </div>
  <Contacto />
</div>
  );
}

