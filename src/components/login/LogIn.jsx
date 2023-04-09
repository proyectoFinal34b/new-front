import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const allUsers = useSelector(state => state.allUsers);
  

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  function handleLogin(e) {
    e.preventDefault();
    const user = allUsers.find(user => user.email === email );
    console.log("ok", user)
    const pass = allUsers.find(user => user.password === password);
    console.log("8", pass)
    if (user && pass) {
      setIsLoggedIn(true);
    } else {
      alert("Email o contraseña incorrectos");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        {!isLoggedIn ? (
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
              href="#"
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
        ) : (
          <div>
            <h1>Bienvenido, {email}!</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
        <Link to='/home' className="bg-gray-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          <button >
          Home</button>
          </Link>
      </div>
    </div>
  );
}

