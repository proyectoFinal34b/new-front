import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useFormPersist from "react-hook-form-persist"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


export default function Registro() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const {register, setValue, watch, reset,formState:{errors, isSubmitSuccessful},  handleSubmit} =  useForm({
    defaultValues:{
active:false
    }
  });

  useFormPersist("items", {
    watch,
    setValue,
    storage:window.localStorage,
    exclude:["password"]
  });
  useEffect(() => {
    if (isSubmitSuccessful && !hasError) { 
      reset({ name: "", lastName: "", email: "", password: "", phoneNumber: "", adress: "" });
    }
  }, [isSubmitSuccessful, reset, hasError]);

  const onSubmit = (data) => {
    axios
      .post("/user", data)
      .then((data) => {
        if (data) {
          Swal.fire({
            icon: 'success',
            title: 'Gracias por registrarte',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate("/login", { replace: true });
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error al registrar el usuario',
            text: 'Por favor, inténtelo de nuevo',
            confirmButtonText: 'OK'
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'warning',
          title: 'El correo electrónico ya existe',
          text: 'Por favor, utilice otro correo',
          confirmButtonText: 'OK'
        });
      });
  };
  

    
return(
      <div className="flex items-center justify-center h-screen">
        <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-center text-2xl font-bold mb-4 text-gray-500">Formulario de Registro de Usuarios</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           type="text" {...register("name", {required: true, maxLength:20})}/>
          {errors.name?.type==="required" && <p className="text-red-500">Se requiere un nombre</p>}
          {errors.name?.type==="maxLength" && <p className="text-red-500">Máximo 20 carcateres</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Apellido:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" {...register("lastName", {required: true, maxLength:20})}/>
          {errors.lastName?.type==="required" && <p className="text-red-500">Se requiere un apellido</p>}
          {errors.lastName?.type==="maxLength" && <p className="text-red-500">Máximo 20 caracteres</p>}
        </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Correo electrónico:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" {...register('email',{ required:true,
            pattern:/^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)$/
                  })}></input>
                  {errors.email?.type==="pattern" && <p className="text-red-500">ingrese un email valido</p>}
                  {errors.email?.type==="required" && <p className="text-red-500">Se requiere un mail</p>}
        </div> 
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password" {...register("password", {required: true, maxLength:10})} />
          {errors.password?.type==="required" && <p className="text-red-500">Debe ingresar una contraseña</p>}
          {errors.password?.type==="maxLength" && <p className="text-red-500">Máximo 10 carcateres</p>}
        </div>
    <button className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="submit">
        Registrarse
    </button>
        </form>
        <p className="text-center mb-8">
          <Link to='/' className="text-sm text-gray-500 hover:text-teal-400">
            Volver a la página de inicio
          </Link>
        </p>
      </div>
      </div>
        )
      }