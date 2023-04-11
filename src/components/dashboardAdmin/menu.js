import React from "react";

export default function Menu() {
  return (
    <>
      <div id="menu" className="bg-dashCol min-h-screen w-1/5">
        <h1 class="bg-gray-100 self-center text-3xl font-semibold py-6 shadow-md">
          BASTET
        </h1>
        <ul>
          <li>
            <button>General</button>
          </li>
          <li>
            <button>Gatos</button>
          </li>
          <li>
            <button>Productos</button>
          </li>
          <li>
            <button>Usuarios</button>
          </li>
          <li>
            <button>Ventas</button>
          </li>
        </ul>
      </div>
    </>
  );
}
