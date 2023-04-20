import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Cart from "../carrito/carrito";
import DarkMode from "./DarkMode";
import { useAuth0 } from "@auth0/auth0-react";
import {LogoutButton} from "../login/LogginAutho";
export const currentLocation = window.location.href.split('/').slice(0, 3).join('/')

const Navbar = ({handlerDarkMode , darkMode}) => {
  console.log({handlerDarkMode, darkMode})
  const styleCompInicio="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-teal-400 md:hover:bg-transparent md:hover:text-teal-400 md:p-0 md:dark:hover:text-teal-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  const [ isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"))
  const carrito= useSelector(state=> state.cart.items)
  const prevUser = JSON.parse(localStorage.getItem("userInfo"))
  const [user, setUser] = useState(prevUser)
  const userType = prevUser?.status
  const { user:userAuth0, isAuthenticated } = useAuth0(); 
  const dispatch = useDispatch();

   useEffect(()=>{
   
    JSON.parse(localStorage.getItem('carritolength'))
  },[isLoggedIn, carrito])

  const [open, setOpen] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(null);
 
  const handlerLogOut = ()=>{
    localStorage.clear()
    localStorage.setItem("darkMode", darkMode)
    setIsLoggedIn(localStorage.getItem("isLoggedIn"))
    window.location.href = currentLocation 
  }
  
  return (
    <nav className="shadow-md bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-teal-400">
          BASTET
        </span></Link>

        <div className="flex md:order-2">
          {isLoggedIn ? (
            <>
            <div className="bg-teal-900 hover:bg-teal-500   dark:bg-teal-400 flex mx-4 px-2 rounded-md text-center items-center justify-center">
            <Link to='/profile' className="text-base font-medium text-white dark:hover:text-white dark:text-slate-900 hover:text-white">
            Hola, {user?.name}!!
          
          </Link>
          </div>
              <button
                className="text-white dark:hover:text-white dark:text-slate-900 hover:text-white bg-teal-900 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-00 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-teal-400 dark:hover:bg-white-200 dark:focus:ring-teal-400"
                onClick={handlerLogOut}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
            {isAuthenticated? " ":  <NavLink to="/login">
                <button
                  type="button"
                  className="text-white bg-teal-900 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-00 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-teal-400 dark:hover:bg-white-200 dark:focus:ring-teal-400"
                >
                  Iniciar sesion
                </button>{" "}
              </NavLink>
            }
            </>
          )}
          {isAuthenticated ? (
            <>
            <div className="bg-teal-900 hover:bg-teal-500   dark:bg-teal-400 flex mx-4 px-2 rounded-md text-center items-center justify-center">
            <Link to='/profile' className="text-base font-medium text-white dark:hover:text-white dark:text-slate-900 hover:text-white">
            Hola, {userAuth0?.name}!!
          </Link>
          </div>
          <LogoutButton/>
            </>
          ) : (
            <> 
            </>
          )}
          
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6  "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {isLoggedIn || isAuthenticated?
          <div className="ml-2">
            <button 
            className="relative w-25 text-gray bg-teal-900 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-00 rounded-lg p-1 text-center mr-3 md:mr-0 dark:bg-teal-400 dark:hover:bg-white-200 dark:focus:ring-teal-400"
            onClick={() => handleOpen()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                className="w-6 h-8 "
              >
                <path
                  d="m26.818 19.04l3.607-10.796c.181-.519.044-.831-.102-1.037-.374-.527-1.143-.532-1.292-.532l-20.385-.004-.544-2.581c-.147-.609-.581-1.19-1.456-1.19h-5.729c-.594 0-.917.278-.917.833v1.49c0 .537.322.677.938.677h4.837l3.702 15.717c-.588.623-.908 1.531-.908 2.378 0 1.864 1.484 3.582 3.38 3.582 1.79 0 3.132-1.677 3.35-2.677h7.21c.218 1 1.305 2.717 3.349 2.717 1.863 0 3.378-1.614 3.378-3.475 0-1.851-1.125-3.492-3.359-3.492-.929 0-2.031.5-2.543 1.25h-8.859c-.643-1-1.521-1.31-2.409-1.345l-.123-.655h13.479c1.016 0 1.216-.37 1.396-.86"
                  fill="#fff"
                  transform="matrix(.64733 0 0 .64733 1.125 1.125)"
                />
              </svg>
              { JSON.parse(localStorage.getItem("carrito"))?.length ?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="absolute top-0 right-0"
                width="30"
                height="30"
              >
                <circle cx="20" cy="10" r="7" fill="#DF013A" />
                <text x="18" y="13" fill="#fff" font-size="10">
                 {JSON.parse(localStorage.getItem("carritolength"))}
                 {console.log(JSON.parse(localStorage.getItem("carrito"))?.length)}
                </text>
              </svg> : ''}
              
            </button>
            
            {open && (
              <Cart onClose={handleClose} setModal={setOpen} open={open} />
            )}
            {/* {open? <Cart setOpen={setOpen} />: <p onClose={setOpen(true)} className='bg-grey 900'>SVG</p>} */}
          </div>
           :""}  
        </div>
       
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className={styleCompInicio}
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/gatos"
                className={styleCompInicio}
              >
                Gatos
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className={styleCompInicio}
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="/productos"
               className={styleCompInicio}
              >
                Tienda
              </a>
            </li>
            <li>
              <a
                href="/donaciones"
          className={styleCompInicio} 
          >
                Donaciones
              </a>
            </li>
            <DarkMode darkMode={darkMode} handlerDarkMode={handlerDarkMode} />
            {userType==="admin" || userType==="superAdmin" ? <Link to={"/dashboard"}><button className=" bg-[#38797c] text-white w-40 rounded-md py-1 shadow-md hover:bg-teal-600" >Dashboard</button></Link>
          : ""} </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
