import React, { useEffect } from "react";
import { CSVLink } from "react-csv";

export default function Tabla({handleColumnClickCat, show, openModal}){
  const stylesNameCol = "w-24 p-2";
  const stylesTd = "h-12 w-40 p-2 mb-4 mt-4";

    const csvHeaders = [
        { label: "Nombre", key: "name" },
        { label: "Arrivo", key: "arrived" },
        { label: "Edad", key: "age" },
        { label: "Género", key: "gender" },
        { label: "Vacunado", key: "vaccin" },
        { label: "ID", key: "id" },
        { label: "ID", key: "id" },
        { label: "ID", key: "id" },
        { label: "Estado", key: "state" },
        { label: "Activo", key: "active" },
        { label: "ID", key: "id" },
      ];
      const csvData = show.map((cat) => ({
        name: cat.name,
        arrived: cat.arrived,
        age: cat.age,
        gender: cat.gender,
        state: cat.state,
        active: cat.state ? "Sí" : "No",
        id: cat.id,
      }));
      const csvFileName = "cats.csv";

      const handlerEdit = (e)=>{
        localStorage.setItem("catId", e.target.id)
        openModal(e.target.name)
      }


    return(
        <>
                <table className="table-fixed cursor-default m-auto shadow-xl dark:bg-white dark:shadow-md dark:shadow-white mt-10">
          <thead>
            <tr className="bg-tableCol  text-white shadow-md ">
              <th></th>
              <th className={stylesNameCol}>
                <button onClick={() => handleColumnClickCat("name")}>
                  Nombre
                </button>
              </th>
              <th className="w-32 p-2">
                <button onClick={() =>  handleColumnClickCat("arrived")}>
                  Arrivo
                </button>
              </th>
              <th className="w-16 p-2">
                <button onClick={() =>  handleColumnClickCat("age")}>Edad</button>
              </th>
              <th className={stylesNameCol}>
                <button onClick={() => handleColumnClickCat("gender")}>
                  Género
                </button>
              </th>
              <th className={stylesNameCol}>
                <button onClick={() =>  handleColumnClickCat("state")}>
                  Estado
                </button>
              </th>
              <th>
              <button onClick={() =>  handleColumnClickCat("update")}>
                  Update
              </button>
              </th>
              <th className="w-20 p-2">
                <button onClick={() =>  handleColumnClickCat("status")}>
                  Activo
                </button>
              </th>
              <th className="w-16 p-2">
                <button onClick={() =>  handleColumnClickCat("id")}>ID</button>
              </th>
              <th className={stylesNameCol}>Edit</th>
            </tr>
          </thead>
          <tbody>
            {show?.map((cat) => {
              return (
                <tr
                  key={cat.id}
                  className="hover:bg-gray-300  dark:text-black dark:hover:bg-gray-400 shadow-md"
                >
                  <td><img src={cat.image} alt={cat.name} className="w-28 h-28 object-cover"/></td>
                  <td className={stylesTd}>{cat.name}</td>
                  <td>{cat.arrived.slice(2, 10)}</td>
                  <td>{cat.age}</td>
                  <td>{cat.gender === "macho" ? "M" : "H"}</td>
                  <td>{cat.state}</td>
                  <td>{cat.updatedAt.slice(2,10)}</td>
                  {cat.status === true ? (
                    <td>
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
                    <button name="editGatos" id={cat.id} onClick={handlerEdit} className="text-white shadow-md bg-teal-900 hover:bg-teal-500  font-medium rounded-lg text-sm px-4 py-1 text-center mr-3 md:mr-0 dark:bg-teal-400 dark:hover:bg-white-200 dark:focus:ring-teal-400">
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
        </>
    )
}