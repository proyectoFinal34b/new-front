import React from "react";
import Contacto from "../login/Contacto";

export default function FormAdopcion() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex items-center">
        <div className="w-1/2">
          <p class="text-gray-900 text-lg text-justify my-4 p-4 border border-gray-300 bg-gray-200">
          ¡Qué emoción que estés considerando adoptar un gato! Sabemos que es una 
          gran decisión, pero te aseguramos que es una de las más gratificantes 
          que puedes tomar. 
          Para iniciar este proceso, por favor llena nuestro formulario de 
          adopción. Una vez que lo recibamos, nos pondremos en contacto contigo 
          lo más pronto posible para hablar más sobre tu experiencia previa con 
          gatos, tus preferencias y necesidades, y los gatos que tenemos 
          disponibles para adopción.
          ¡Esperamos recibir tu 
          formulario y comenzar este emocionante proceso juntos!
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Contacto />
        </div>
      </div>
    </div>
  );
}
