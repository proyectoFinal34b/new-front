import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function PasswordResetForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://proyectofinal-gg57.onrender.com/user/password", { email:email });
      console.log(response)
      alert('Se ha enviado un correo electrónico para restablecer su contraseña');
      setEmail('');
    } catch (error) {
      alert("no se encontró el email");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 dark:bg-gray-900 rounded-md w-full max-w-md">
        <h5 className="text-3xl dark:text-teal-400 font-bold mb-3 mt-8 text-center">Restablecé tu contraseña</h5>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <label className="block mb-2 font-bold text-gray-500">
            Email:
          </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-input"
            placeholder="Tu dirección de email..."
          />
          <div className="flex justify-center mt-8">
            <button 
              className="px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600"
              type="submit">
              Enviar email
            </button>
          </div>
        </form>
        <p className="text-center mb-8">
          <Link to='/home' className="text-sm text-gray-500 hover:text-teal-400">
            Volver a la página de inicio
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PasswordResetForm;