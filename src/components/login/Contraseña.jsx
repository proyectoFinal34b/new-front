import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function PasswordResetForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/forgot", { email:email });
      console.log(response)
      Swal.fire({
        icon: 'success',
        title: 'Correo electrónico enviado',
        text: 'Se ha enviado un correo electrónico para restablecer su contraseña',
      });
      setEmail('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Correo electrónico no encontrado',
        text: 'Por favor, asegúrate de que el correo electrónico ingresado sea correcto e inténtalo de nuevo.',
        confirmButtonText: 'OK'
      });
           
    }
  };  
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 dark:bg-gray-900 rounded-md w-full max-w-md">
        <h5 className="text-3xl dark:text-teal-400 font-bold mb-3 mt-8 text-center">Restablecé tu contraseña</h5>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <label className="block mb-2 font-bold text-gray-500">
            Correo electrónico:
          </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-input"
            placeholder="Tu dirección de correo..."
          />
          <div className="flex justify-center mt-8">
            <button 
              className="px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600"
              type="submit">
              Enviar 
            </button>
          </div>
        </form>
        <p className="text-center mb-8">
          <Link to='/' className="text-sm text-gray-500 hover:text-teal-400">
            Volver a la página de inicio
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PasswordResetForm;