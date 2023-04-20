// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getUsers, isLogged } from "../../redux/actions"
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

// export default function Login() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const isLoggedIn = useSelector(state=>state.logged)

//   useEffect(() => {
//     dispatch(getUsers());
//   }, [dispatch]);

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("email");
//     const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setEmail(storedEmail || "");

//   }, []);

//   useEffect(() => {
//     localStorage.setItem("isLoggedIn", isLoggedIn);
//     localStorage.setItem("email", email);
//   }, [isLoggedIn, email]);

//   async function handleLogin(e) {
//     e.preventDefault();
//     const validation = await axios.post('https://proyectofinal-gg57.onrender.com/user/validate', { email: email, password: password });
//     console.log(validation)
//     if (validation.data.logged) {
//       dispatch(isLogged(validation.data));
//     } else {
//       alert("Email o contraseña incorrectos");
//     }
//   }

//   function handleLogout() {
//     dispatch(isLogged(false));
//     setEmail("");
//   }

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLogged } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LoginButton } from "./LogginAutho";
import { currentLocation } from "../navbar/Navbar";
import Swal from 'sweetalert2'


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const isLoggedIn = useSelector((state) => state.logged);
  

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  useEffect(() => {
    const storedIsLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    if (storedIsLoggedIn) {
      dispatch(isLogged(true));
      setIsSessionStarted(true);
    }
  }, [dispatch]);

  async function handleLogin(e) {
    e.preventDefault();
  
    if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Por favor, ingrese su email y contraseña'
      });
      return;
    }
  
    try {
      const response = await axios.post("/user/validate", {
        email: email,
        password: password,
      });
  
      if (response.data.logged) {
        dispatch(isLogged(response.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userInfo", JSON.stringify(response.data.validatedUser));         
        setIsSessionStarted(true);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 3500
        }).then(() => {
          window.location.href = currentLocation;
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Correo electrónico o contraseña incorrectos',
        text: 'Por favor, inténtelo de nuevo'
      });
    }
  }

  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">

        
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
            onSubmit={handleLogin}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Correo electrónico
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nombre de usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Iniciar sesión
              </button>
            </div>
            <br/>
            <a
              className="inline-block align-baseline font-bold text-sm text-gray-900 hover:text-teal-500"
              href="/resetpassword"
            >
              Has olvidado tu contraseña?
            </a>
            <p>
            <a
              className="inline-block align-baseline font-bold text-sm text-gray-900 hover:text-teal-500"
              href="/login/registro"
            >
              Registrarte
            </a>
            </p>
          </form>
          <LoginButton/>
        <p className="text-center mb-8">
          <Link to='/' className="text-sm text-gray-500 hover:text-teal-400">
            Volver a la página de inicio
          </Link>
        </p>      
      </div>

    </div>
  )
}

