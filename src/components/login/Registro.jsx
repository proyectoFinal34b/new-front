import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useFormPersist from "react-hook-form-persist"
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';


export default function Registro() {
  const navigate = useNavigate();
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
useEffect(()=>{
    reset({name:"", lastName:"", email:"", password:"", phoneNumber:"", adress:""})
  }, [isSubmitSuccessful, reset] )

  const onSubmit = (data) => {
    axios
      .post("https://proyectofinal-gg57.onrender.com/user", data)
      .then((data) => {
        if (data) {
          alert("Usuario registrado");
          navigate("/login", { replace: true });
        } else {
          alert("Ha ocurrido un error al registrar el usuario");
        }
      })
      .catch((error) => {
        alert("El email ya existe", error);
      });
  };
/*   const responseGoogle = (response) => {
    console.log(response);
    // Aquí puede hacer cualquier cosa con la respuesta de Google, como autenticar al usuario en su aplicación o acceder a los datos del usuario proporcionados por Google
  }; */
  
  

    
return(
      <div className="flex items-center justify-center h-screen">
        <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-center text-2xl font-bold mb-4">Formulario de Registro de Usuarios</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           type="text" {...register("name", {required: true, maxLength:10})}/>
          {errors.name?.type==="required" && <p className="text-red-500">Se requiere un nombre</p>}
          {errors.name?.type==="maxLength" && <p className="text-red-500">Máximo 10 carcateres</p>}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Apellido:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" {...register("lastName", {required: true})}/>
          {errors.lastName?.type==="required" && <p className="text-red-500">Se requiere un apellido</p>}
        </div>
<div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" {...register('email',{ required:true,
            pattern:/^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)$/
                  })}></input>
                  {errors.email?.type==="pattern" && <p className="text-red-500">ingrese un email valido</p>}
                  {errors.email?.type==="required" && <p className="text-red-500">Se requiere un mail</p>}
        </div>    
        <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
        Dirección:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        {...register("address", { required: true })}
      />
      {errors.address?.type === "required" && (
        <p className="text-red-500">Se requiere una dirección</p>
      )}
      </div>
      <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Teléfono:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        {...register("phoneNumber", { required: true })}
      />
      {errors.phoneNumber?.type === "required" && (
        <p className="text-red-500">Se requiere un número de teléfono</p>
      )}
        </div>
  <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="string" {...register("password", {required: true})} />
          {errors.password?.type==="required" && <p className="text-red-500">Debe ingresar una contraseña</p>}
        </div>
        <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      ¿Activar cuenta?
    </label>
    <input
      type="checkbox"
      {...register("active", { required: true })}
    />
    {errors.active && (
      <p className="text-red-500">Este campo es requerido</p>
    )}
  </div>
    <button className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="submit">
        Registrarse
    </button>
        </form>
        <p className="text-center mb-8">
          <Link to='/home' className="text-sm text-gray-500 hover:text-teal-400">
            Volver a la página de inicio
          </Link>
        </p>
      </div>
{/*       <GoogleLogin
  clientId="bastet-383823"
  buttonText="Iniciar sesión con Google"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}
/> */}

      </div>
        )
      }

// import React, { useEffect } from 'react';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form"
// import useFormPersist from "react-hook-form-persist"

// export default function Registro() {
//   const navigate = useNavigate();
//   const {register, setValue, watch, reset,formState:{errors, isSubmitSuccessful},  handleSubmit} =  useForm({
//     defaultValues:{
// active:false
//     }
//   });

//   useFormPersist("items", {
//     watch,
//     setValue,
//     storage:window.localStorage,
//     exclude:["password"]
//   });

//   // const [input, setInput] = useState({
//   //   name: '',
//   //   lastName: '',
//   //   email: '',
//   //   phoneNumber: '',
//   //   password: '',
//   //   confirmPassword: ''
//   // });
//   useEffect(()=>{
//     reset({name:"", lastName:"", email:"", password:""})
//   }, [isSubmitSuccessful, reset] )

//   const onSubmit = (data, )=>{
//     axios.post("https://proyectofinal-gg57.onrender.com/user", data)
//     .then((data) => {
//       if(data) {
//         alert(alert("usuario Registrado"))
//         navigate("/login", {replace:true});
//       }else{

//       }
//     })
//       .catch (error => {
//         alert("el email ya existe", error)
//       })

//     }

    
  
//   return(
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Nombre:
//         </label>
//         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//          type="text" {...register("name", {required: true, maxLength:10})}/>
//         {errors.name?.type==="required" && <p className="text-red-500">Se requiere un nombre</p>}
//         {errors.name?.type==="maxLength" && <p className="text-red-500">Máximo 10 carcateres</p>}
//       </div>
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Apellido:
//         </label>
//         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         type="text" {...register("lastName", {required: true})}/>
//         {errors.lastName?.type==="required" && <p className="text-red-500">Se requiere un apellido</p>}
//       </div>
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Email:
//         </label>
//         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         type="text" {...register('email',{ required:true,
//           pattern:/^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)$/
//                 })}></input>
//                 {errors.email?.type==="pattern" && <p className="text-red-500">ingrese un email valido</p>}
//       </div>
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Contraseña:
//         </label>
//         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         type="string" {...register("password", {required: true})} />
//         {errors.password?.type==="required" && <p className="text-red-500">Debe ingresar una contraseña</p>}
//       </div>
//       <div>
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         ¿Activar cuenta?
//       </label>
//       <input
//         type="checkbox"
//         {...register("active", { required: true })}
//       />
//       {errors.active && (
//         <p className="text-red-500">Este campo es requerido</p>
//       )}
//     </div>

//     <button className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Registrarse</button>
//       </form>
//     </div>
//     </div>
//       )
//     }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setInput(prevInput => ({...prevInput, [name]: value}));
//   }

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
//     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Nombre:
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" value={input.name} onChange={handleChange} required />
//         </label>
//       </div>
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Apellido:
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="lastName" value={input.lastName} onChange={handleChange} required />
//         </label>
//       </div>
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Email:
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" value={input.email} onChange={handleChange} required />
//         </label>
//       </div>
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Teléfono:
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" name="phoneNumber" value={input.phoneNumber} onChange={handleChange} required />
//         </label>
//       </div>
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Crear contraseña:
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" value={input.password} onChange={handleChange} required />
//         </label>
//       </div>
//       <div>
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         Confirmar contraseña:
//         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="confirmPassword" value={input.confirmPassword} onChange={handleChange} required />
//     </label>
//       </div>
//       <button className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Registrarse</button>
//     </form>
//     </div>
//     </div>
//   );
// }
