import React from "react";
import Contacto from "../login/Contacto";
import {Link} from 'react-router-dom'

export default function FormAdopcion({handlerDarkMode , darkMode}) {
  return (
    <>
   
    <div className="flex justify-center items-center w-1/2 m-auto">
    <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Formulario de apadrinamiento</h5>
        <p className="font-normal my-10 text-gray-700 dark:text-gray-400">Si estás interesado en apadrinar un gato, ¡felicidades por tu decisión! El apadrinamiento es una forma maravillosa de ayudar a un gato necesitado a tener una vida mejor. Como padrino, tendrás la oportunidad de hacer una gran diferencia en la vida de un gato proporcionándole cuidados y amor. Si estás listo para apadrinar, te invitamos a llenar nuestro formulario para que podamos ponernos en contacto contigo. ¡Gracias por considerar apadrinar a un gato!</p>
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