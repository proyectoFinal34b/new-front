import React from "react";
import { Link} from "react-router-dom";
import DarkMode from "../navbar/DarkMode";
export default function NavBarDash ({props,handlerDarkMode , darkMode}) {

    return(
        <>
        <div id="admin-view " className="bg-white flex justify-between items-center px-6 py-2.5 my-0  shadow-sm  dark:bg-slate-900 dark:text-teal-400 dark:font-medium dark:shadow-white ">
          <div className="">
        <Link to={"/"}>
        <h1 class=" self-center text-3xl font-semibold py-6 shadow-sm dark:bg-slate-900 dark:text-teal-400 w-80">
          BASTET
        </h1></Link>
        <div>
        <DarkMode darkMode={darkMode} handlerDarkMode={handlerDarkMode} />
        </div>
        </div>
            <div className="flex justify-center">
          <h1 className="my-auto mx-4">Hola {props?.name}!</h1>
          <img src={props?.image} class="w-16 h-16 object-cover rounded-full"></img>
          </div>
        </div>
        </>
    )
}