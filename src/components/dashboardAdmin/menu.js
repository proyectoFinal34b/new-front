import React, { useEffect, useState } from "react";
import llamados from "./logic/llamados";

export default function Menu(props) {




  const buttonStyle = "bg-buttonCol text-white w-40 rounded-md py-1 shadow-md hover:bg-teal-600 dark:text-gray-900"
  const buttonStyle2 = "bg-[#38797c] text-white w-40 rounded-md py-1 shadow-md hover:bg-teal-600 dark:text-gray-200"

  return (
    <>
      <div id="menu" className="bg-dashCol min-h-screen w-1/5 dark:bg-slate-900 dark:shadow-white shadow-md ">
        
        <ul className="mt-8 space-y-8 font-medium text-lg sticky top-12 ">
          <li>
            <button className={buttonStyle2} onClick={()=>props.updateHandler()}>Actualizar</button>
          </li>
          <li>
            <button name="gatos" className={buttonStyle} onClick={(e)=>props.click(e.target.name)}>Gatos</button>
          </li>
          <li>
            <button name="products" className={buttonStyle} onClick={(e)=>props.click(e.target.name)}>Productos</button>
          </li>
          <li>
            <button name="users" className={buttonStyle} onClick={(e)=>props.click(e.target.name)}>Usuarios</button>
          </li>
          <li>
            <button name="orders" className={buttonStyle} onClick={(e)=>props.click(e.target.name)}>Ventas</button>
          </li>
          <li>
            <button name="añadirGato" className={buttonStyle2} onClick={(e)=>props.openModal(e.target.name)}>Añadir Gato</button>
          </li>
          <li>
            <button name="añadirProducto" className={buttonStyle2} onClick={(e)=>props.openModal(e.target.name)}>Añadir Producto</button>
          </li>
        </ul>
      </div>
    </>
  );
}
