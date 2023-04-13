import React from "react";

export default function Menu(props) {

  const buttonStyle = "bg-buttonCol text-white w-40 rounded-md py-1 shadow-md hover:bg-teal-600"

  return (
    <>
      <div id="menu" className="bg-dashCol min-h-screen w-1/5">
        <h1 class="bg-gray-100 self-center text-3xl font-semibold py-6 shadow-md">
          BASTET
        </h1>
        <ul className="mt-8 space-y-8 font-medium text-lg">
          <li>
            <button name="general" className={buttonStyle} onClick={(e)=>props.click(e.target.name)}>General</button>
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
        </ul>
      </div>
    </>
  );
}
