import React from "react";
import Contacto from "../login/Contacto";
import {Link} from 'react-router-dom'

export default function FormAdopcion({handlerDarkMode , darkMode}) {
  return (
    <>
   
    <div className="flex justify-center items-center w-1/2 m-auto">
    <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Formulario de adopcion</h5>
        <p className="font-normal my-10 text-gray-700 dark:text-gray-400">¡Qué emoción que estés considerando adoptar un gato! Sabemos que es una 
            gran decisión, pero te aseguramos que es una de las más gratificantes 
            que puedes tomar. 
            Para iniciar este proceso, por favor llena nuestro formulario de 
            adopción. Una vez que lo recibamos, nos pondremos en contacto contigo 
            lo más pronto posible para hablar más sobre tu experiencia previa con 
            gatos, tus preferencias y necesidades, y los gatos que tenemos 
            disponibles para adopción.
            ¡Esperamos tu mensaje!</p>
            <div className="p-1">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#adopcion</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gatitos</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#donacion</span>
            </div>
            <Link to='/gatos'><button className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Volver</button></Link>
    </div>
    <div className="w-1/2">
    <Contacto/>
    </div>
</div>
</>
  );
}