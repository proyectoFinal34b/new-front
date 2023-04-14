import React, { useState } from "react";
import { sortTable } from "./logic/ordenamientoTablas";
import { CSVLink } from "react-csv";

export default function Gatos({ cats }) {
  const stylesNameCol = "w-28 p-2";
  const stylesTd = "h-8 p-2  ";
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

  const filteredCats = sortTable(filters.column, filters.direction, cats);

  //Tabla excel
  const csvHeaders = [
    {label:"Nombre", key:"name"},
    {label:"Arrivo", key:"arrived"},
    {label:"Edad", key:"age"},
    {label:"Género", key:"gender"},
    {label:"Estado", key:"state"},
    {label:"Activo", key:"active"},
    {label:"ID", key:"id"},
  ]
  const csvData = filteredCats.map((cat)=>({
    name: cat.name,
    arrived: cat.arrived,
    age:cat.age,
    gender:cat.gender,
    state:cat.state,
    active: cat.state ? "Sí" : "No",
    id:cat.id
  }))
  const csvFileName = "cats.csv";

  return (
    <>
      <h1>Soy la view gatos</h1>
      <div id="table-cats">
        <table className="table-fixed cursor-default m-auto border-collapse border border-slate-900">
          <thead >
            <tr className="bg-tableCol  text-white border-collapse border border-slate-900">
              <th className={stylesNameCol}>
                <button onClick={() => handleColumnClick("name")}>
                  Nombre
                </button>
              </th>
              <th className="w-32 p-2">
                <button onClick={() => handleColumnClick("arrived")}>
                  Arrivo
                </button>
              </th>
              <th className="w-16 p-2">
                <button onClick={() => handleColumnClick("age")}>Edad</button>
              </th>
              <th className={stylesNameCol}>
                <button onClick={() => handleColumnClick("gender")}>
                  Género
                </button>
              </th>
              <th className={stylesNameCol}>
                <button onClick={() => handleColumnClick("state")}>
                  Estado
                </button>
              </th>
              <th className="w-20 p-2">
                <button onClick={() => handleColumnClick("status")}>
                  Activo
                </button>
              </th>
              <th className="w-16 p-2">
                <button onClick={() => handleColumnClick("id")}>ID</button>
              </th>
              <th className={stylesNameCol}>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredCats?.map((cat) => {
              return (
                <tr key={cat.id} className="hover:bg-gray-300 border-b border-slate-300 ">
                  <td className={stylesTd}>{cat.name}</td>
                  <td>{cat.arrived.slice(2, 10)}</td>
                  <td>{cat.age}</td>
                  <td>{cat.gender==="macho"? "M" : "H"}</td>
                  <td>{cat.state}</td>
                  {cat.status === true ? (
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
                  <td>{cat.id}</td>
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
        <CSVLink data={csvData} headers={csvHeaders} filename={csvFileName}>
        Descargar CSV
      </CSVLink>
      </div>
    </>
  );
}
