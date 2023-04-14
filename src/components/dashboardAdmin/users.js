import React, { useState } from "react";
import { sortTable } from "./logic/ordenamientoTablas";
import { CSVLink } from "react-csv";

export default function Usuarios({ users }) {
  const stylesNameCol = "w-28 px-2 py-3 cursor-pointer";
  const stylesTd = "h-8 px-2 py-3";
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

  const filteredUsers = sortTable(filters.column, filters.direction, users);
  
    // Define las opciones para la descarga del CSV
    const csvHeaders = [
        { label: "Nombre", key: "name" },
        { label: "Apellido", key: "lastName" },
        { label: "Email", key: "email" },
        { label: "Creado", key: "createdAt" },
        { label: "Status", key: "status" },
        { label: "Activo", key: "active" },
        { label: "ID", key: "id" },
      ];
      const csvData = filteredUsers.map((user) => ({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        createdAt: user.createdAt.slice(2, 10),
        status: user.status,
        active: user.active ? "Sí" : "No",
        id: user.id,
      }));
      const csvFileName = "usuarios.csv";

  return (
    <>
      <h1>Soy la view users</h1>
      <div>
        <table className="table-fixed cursor-default m-auto border-collapse border border-slate-900">
          <thead>
            <tr className="bg-tableCol  text-white border-collapse border border-slate-900">
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClick("name")}
              >
                Nombre
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClick("lastName")}
              >
                Apellido
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClick("email")}
              >
                Email
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClick("createdAt")}
              >
                Creado
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClick("status")}
              >
                Status
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClick("active")}
              >
                Activo
              </th>
              <th className="w-16 p-2" onClick={() => handleColumnClick("id")}>
                ID
              </th>
              <th className={stylesNameCol}>Edit</th>
            </tr>
          </thead>
          <tbody className=" border-b border-black ">
            {filteredUsers?.map((user) => {
              return (
                <tr className="hover:bg-gray-300 border-b border-slate-300 ">
                  <td className={stylesTd}>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt.slice(2,10)}</td>
                  <td>{user.status}</td>
                  {user.active=== true ? (
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
                  <td>{user.id}</td>
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
