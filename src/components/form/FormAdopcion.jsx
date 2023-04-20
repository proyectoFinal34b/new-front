import React from "react";
import Contacto from "../login/Contacto";

export default function FormAdopcion() {
  return (
    <div class="w-sm h-screen rounded overflow-hidden shadow-lg bg-gray-800">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-gray-200 bg-gray-700">Adoptar</div>
    <p class="text-gray-200 text-base">
    ¡Qué emoción que estés considerando adoptar un gato! Sabemos que es una 
          gran decisión, pero te aseguramos que es una de las más gratificantes 
          que puedes tomar. 
          Para iniciar este proceso, por favor llena nuestro formulario de 
          adopción. Una vez que lo recibamos, nos pondremos en contacto contigo 
          lo más pronto posible para hablar más sobre tu experiencia previa con 
          gatos, tus preferencias y necesidades, y los gatos que tenemos 
          disponibles para adopción.
          ¡Esperamos tu mensaje!
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#adoptar</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gatitos</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#donacion</span>
  </div>
  <Contacto/>
</div>
  );
}
