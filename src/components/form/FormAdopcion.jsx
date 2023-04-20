import React from "react";
import Contacto from "../login/Contacto";

export default function FormAdopcion() {
  return (
    <div class="flex justify-center items-center">
    <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Formulario de adopcion</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">¡Qué emoción que estés considerando adoptar un gato! Sabemos que es una 
            gran decisión, pero te aseguramos que es una de las más gratificantes 
            que puedes tomar. 
            Para iniciar este proceso, por favor llena nuestro formulario de 
            adopción. Una vez que lo recibamos, nos pondremos en contacto contigo 
            lo más pronto posible para hablar más sobre tu experiencia previa con 
            gatos, tus preferencias y necesidades, y los gatos que tenemos 
            disponibles para adopción.
            ¡Esperamos tu mensaje!</p>
    </div>
</div>
  );
}