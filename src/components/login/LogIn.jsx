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
import { Link } from "react-router-dom";
import { getUsers, isLogged } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Redirect } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const isLoggedIn = useSelector((state) => state.logged);
  

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const storedPassword = sessionStorage.getItem("password");
    const storedIsLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    if (storedIsLoggedIn) {
      dispatch(isLogged(true));
      setIsSessionStarted(true);
    }
  }, [dispatch]);

  

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("https://proyectofinal-gg57.onrender.com/user/validate", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.logged) {
          dispatch(isLogged(response.data));
          sessionStorage.setItem("isLoggedIn", true);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("password", password);
          setIsSessionStarted(true);
          alert("Inicio de sesión exitoso")
          window.location.href = "http://localhost:3000/"
        } else {
          alert("Email o contraseña incorrectos");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleLogout() {
    dispatch(isLogged(false));
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    setEmail("");
    setIsSessionStarted(false);
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
                Email
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
        <p className="text-center mb-8">
          <Link to='/' className="text-sm text-gray-500 hover:text-teal-400">
            Volver a la página de inicio
          </Link>
        </p>
      </div>
    </div>
  )
}

