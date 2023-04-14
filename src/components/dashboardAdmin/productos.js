import React, { useState } from "react";
import { sortTable } from "./logic/ordenamientoTablas";

export default function Productos({ products }) {
  const stylesNameCol = "w-28 p-2 cursor-pointer ";
  const stylesTd = "h-8 px-2 py-3 ";
  const [filters, setFilters] = useState({
    column: "id",
    direction: "desc",
  });
  console.log(filters);

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

  const filteredProducts = sortTable(
    filters.column,
    filters.direction,
    products
  );

  return (
    <>
      <h1>Soy la view products</h1>
      <div>
        <table className="table-fixed cursor-default m-auto border-collapse border border-slate-900">
          <thead className="bg-tableCol  text-white border-collapse border border-slate-900">
            <th
              className="w-22 p-2"
              onClick={() => handleColumnClick("name")}
            >
              Nombre
            </th>
            <th className="w-16 p-2" onClick={() => handleColumnClick("price")}>Precio</th>
            <th className="w-16 p-2" onClick={() => handleColumnClick("stock")}>Stock</th>
            <th className="w-16 p-2" onClick={() => handleColumnClick("categoryId")}>Categoria</th>
            <th className="w-20 p-2" >Desc active</th>
            <th className={stylesNameCol} onClick={() => handleColumnClick("desVal")}>Desc valor</th>
            <th className="w-20 p-2" onClick={() => handleColumnClick("active")}>Activo</th>
            <th className="w-16 p-2" onClick={() => handleColumnClick("id")}>ID</th>
            <th className={stylesNameCol}>Edit</th>
          </thead>
          <tbody>
            {filteredProducts?.map((productos) => {
              return (
                <tr key={productos.id} className="hover:bg-gray-300 border-b border-slate-300 ">
                  <td className={stylesTd}>{productos.name}</td>
                  <td>${productos.price}</td>
                  <td>{productos.stock}</td>
                  <td>{productos.category.name}</td>
                  {productos.discount.active === true ? (
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-circle-check m-auto"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#18C5DC"
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
                        stroke="#FF4500"
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
                  <td>{productos.discount.value}%</td>
                  <td>{productos.active=== true ? (
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
                  )}</td>
                  <td>{productos.id}</td>
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
