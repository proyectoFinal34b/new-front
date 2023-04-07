import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registro() {
    const navigate = useNavigate();
  
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      alert('La contraseña y la confirmación de contraseña no coinciden.');
      return;
    }
    axios.post('https://proyectofinal-gg57.onrender.com/user', input)
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
      });
      navigate("/login", {replace:true});
  }
  

  function handleChange(e) {
    const { name, value } = e.target;
    setInput(prevInput => ({...prevInput, [name]: value}));
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" value={input.name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Apellido:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="lastName" value={input.lastName} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" value={input.email} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Teléfono:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" name="phoneNumber" value={input.phoneNumber} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Crear contraseña:
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" value={input.password} onChange={handleChange} required />
        </label>
      </div>
      <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Confirmar contraseña:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="confirmPassword" value={input.confirmPassword} onChange={handleChange} required />
    </label>
      </div>
      <button className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Registrarse</button>
    </form>
    </div>
    </div>
  );
}
