import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isLogged } from '../../redux/actions';

const Navbar = () => {
  const isLoggedIn = useSelector(state=>state.logged)
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
    return(
<nav class="shadow-md bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-teal-400">BASTET</span>
  <div class="flex md:order-2">
  {isLoggedIn? <div>Hola,{user.name}!!<button onClick={()=>dispatch(isLogged({logged:false, data:{}}))}>Log out</button></div> : <NavLink to="/login"><button type="button" class="text-gray bg-teal-900 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-00 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-teal-400 dark:hover:bg-white-200 dark:focus:ring-teal-400">iniciar sesion</button> </NavLink>}
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/home" class="block py-2 pl-3 pr-4 text-white bg-teal-400 rounded md:bg-transparent md:text-teal-400 md:p-0 md:dark:text-teal-400" aria-current="page">Blog</a>
      </li>
      <li>
        <a href="/gatos" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-teal-400 md:hover:bg-transparent md:hover:text-teal-400 md:p-0 md:dark:hover:text-teal-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gatos</a>
      </li>
      <li>
        <a href="/about-us" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-teal-400 md:hover:bg-transparent md:hover:text-teal-400 md:p-0 md:dark:hover:text-teal-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre nosotros</a>
      </li>
      <li>
        <a href="/productos" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-teal-400 md:hover:bg-transparent md:hover:text-teal-400 md:p-0 md:dark:hover:text-teal-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tienda</a>
      </li>
      <li>
        <a href="/donaciones" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-teal-400 md:hover:bg-transparent md:hover:text-teal-400 md:p-0 md:dark:hover:text-teal-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Donaciones</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

        
    )
}

export default Navbar;