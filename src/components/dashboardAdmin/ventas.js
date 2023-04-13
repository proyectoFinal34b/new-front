import React, { useState } from "react";
import { sortTable } from "./logic/ordenamientoTablas";

export default function Ventas({ orders }) {
  const stylesNameCol = "w-28 p-2 cursor-pointer ";
  const stylesTd = "h-8 px-2 py-3  ";
  const [filters, setFilters] = useState({
    column: "id",
    direction: "desc",
  });

  const handleColumnClick = (columnName) => {
    if (columnName === filters.column) {
      setFilters({
        ...filters,
        direction: filters.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setFilters({
        column: columnName,
        direction: "asc",
      });
    }
  };
  const filteredOrders = sortTable(filters.column, filters.direction, orders);
  return (
    <>
      <h1>Soy la view ventas</h1>
      <div>
        <table className="table-fixed cursor-default m-auto border-collapse border border-slate-900">
          <thead>
            <tr className="bg-tableCol  text-white border-collapse border border-slate-900">
              <th className="w-12" onClick={() => handleColumnClick("id")}>ID</th>
              <th className="w-36" onClick={() => handleColumnClick("delivery")}>Delivery</th>
              <th onClick={() => handleColumnClick("list")}>List</th>
              <th className={stylesNameCol} onClick={() => handleColumnClick("status")}>Status</th>
              <th className={stylesNameCol} onClick={() => handleColumnClick("createdAt")}>Ralizada</th>
              <th className={stylesNameCol}>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders?.map((order) => {
              return (
                <tr key={order.id} className="hover:bg-gray-300 border-b border-slate-300 ">
                  <td className={stylesTd}>{order.id}</td>
                  {order.delivery === "proceso" ? (
                    <td className="flex m-auto justify-center items-center" >
                        En proceso
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-truck-delivery"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#7940C2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="7" cy="17" r="2" />
                        <circle cx="17" cy="17" r="2" />
                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                        <line x1="3" y1="9" x2="7" y2="9" />
                      </svg>
                    </td>
                  ) : order.delivery === "cancelado" ? (
                    <td className="flex m-auto justify-center items-center">
                        Cancelado
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-square-x"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#7940C2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                      </svg>
                    </td>
                  ) : (
                    <td className="flex m-auto justify-center items-center">
                        Entregado
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-package"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#7940C2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                        <line x1="12" y1="12" x2="20" y2="7.5" />
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <line x1="12" y1="12" x2="4" y2="7.5" />
                        <line x1="16" y1="5.25" x2="8" y2="9.75" />
                      </svg>
                    </td>
                  )}
                  <td >{order.list.length}</td>
                  {order.status=== "activo" ? (
                    <td >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-circle-check m-auto"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00b341"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>{" "}
                    </td>
                  ) : (
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-circle-x  m-auto"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff2825"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                      </svg>{" "}
                    </td>
                  )}
                  <td>{order.createdAt.slice(2, 10)}</td>
                  <td>
                    <button className="text-white shadow-md bg-teal-900 hover:bg-teal-500  font-medium rounded-lg text-sm px-4 py-1 text-center mr-3 md:mr-0 dark:bg-teal-400 dark:hover:bg-white-200 dark:focus:ring-teal-400">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
