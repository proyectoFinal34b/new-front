import React, { useState } from "react";
import { sortTable } from "./logic/ordenamientoTablas";
import { CSVLink } from "react-csv";
import Buttons from "./logic/buttons";
import { handleColumnClick, handlerClick, handlerClickType } from "./logic/handlers";
import Example from "./charts/chart";

export default function Usuarios({ users, openModal }) {  
  const stylesbtncharmander="focus:bg-green-200 font-medium bg-[#A3E3DD] w-36 shadow-md p-2 mr-4 mb-2 rounded-sm hover:bg-[#0D9488] hover:text-white"
const stylesNameCol = "w-28 px-2 py-3 cursor-pointer";
const stylesTd = "h-8 px-2 py-3 ";
const [edit, setEdit] = useState(false)
  const [filters, setFilters] = useState({
    date: "historico",
    type:"",
    column: "id",
    direction: "desc",
  });
  const [show, setShow] = useState([...users])

  const handleColumnClickUser = (columnName) => {
    handleColumnClick(columnName, filters, setFilters, show, setShow)
  };
    const handlerClickUser = (e) => {
      handlerClick(e, filters, setFilters, users, setShow)
    };
    
    const handlerClickTypeUser = (e)=>{
      handlerClickType(e, filters, setFilters, users, setShow, "status")
    }
  
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
      const handlerEdit = (e)=>{
        localStorage.setItem("userIdEdit", e.target.id)
        openModal(e.target.name)
      }
  return (
    <>
      
      <Example data={show} arg={filters.type} periodo={filters.date}></Example>
      <button className={stylesbtncharmander} value="superAdmin" onClick={handlerClickTypeUser}>Super Admin</button>
      <button className={stylesbtncharmander} value="admin" onClick={handlerClickTypeUser}>Admin</button>
      <button className={stylesbtncharmander} value="user" onClick={handlerClickTypeUser}>User</button>
  
      <Buttons handlerClick={handlerClickUser}></Buttons>
      <div>
        <table className="table-fixed cursor-default m-auto dark:bg-white">
          <thead>
            <tr className="bg-tableCol  text-white dark:text-black">
              <th>

              </th>
               <th
                className={stylesNameCol}
                onClick={() => handleColumnClickUser("name")}
              >
                Nombre
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClickUser("lastName")}
              >
                Apellido
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClickUser("email")}
              >
                Email
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClickUser("createdAt")}
              >
                Creado
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClickUser("status")}
              >
                Status
              </th>
              <th
                className={stylesNameCol}
                onClick={() => handleColumnClickUser("active")}
              >
                Activo
              </th>
              <th className="w-16 p-2" onClick={() => handleColumnClickUser("id")}>
                ID
              </th>
              <th className={stylesNameCol}>Edit</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredUsers?.map((user) => {
              return (
                <tr className="hover:bg-gray-300 shadow-md dark:text-black dark:hover:bg-gray-400">
                  <td><img src={user.image} alt={user.image} className="h-28 w-28"/></td>
                  <td> {user.name}</td>
                  <td className={stylesTd}>{user.lastName}</td>
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
                    <button name="editUsers" id={user.id} onClick={handlerEdit} className="text-white shadow-md bg-teal-900 hover:bg-teal-500  font-medium rounded-lg text-sm px-4 py-1 text-center mr-3 md:mr-0 dark:bg-teal-400 dark:hover:bg-white-200 dark:focus:ring-teal-400">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className=" font-medium mt-5 flex justify-center items-center">
          <CSVLink
            className="bg-[#134E4A] text-white flex shadow-md w-44 justify-center items-center p-2 rounded-md hover:bg-teal-500 hover:text-white"
            data={csvData}
            headers={csvHeaders}
            filename={csvFileName}
          >
            Descargar CSV
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <polyline points="7 11 12 16 17 11" />
  <line x1="12" y1="4" x2="12" y2="16" />
</svg>
          </CSVLink>
          
        </div>
      </div>
    </>
  );
}
