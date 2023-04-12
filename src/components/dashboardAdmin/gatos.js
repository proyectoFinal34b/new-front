import React, { useState } from "react";
import { sortTable } from "./logic/ordenamientoTablas";

export default function Gatos({ cats }) {
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

  return (
    <>
      <h1>Soy la view gatos</h1>
      <div id="table-cats">
        <table className="table-fixed m-auto border-collapse border border-slate-400">
          <thead>
            <tr className="bg-tableCol text-white border-collapse border border-slate-400">
              <th className="w-32">
                <button onClick={() => handleColumnClick("name")}>
                  Nombre
                </button>
              </th>
              <th>
                <button onClick={() => handleColumnClick("arrived")}>
                  Arrivo
                </button>
              </th>
              <th>
                <button onClick={() => handleColumnClick("age")}>Edad</button>
              </th>
              <th>
                <button onClick={() => handleColumnClick("gender")}>
                  Género
                </button>
              </th>
              <th>
                <button onClick={() => handleColumnClick("state")}>
                  Estado
                </button>
              </th>
              <th>
                <button onClick={() => handleColumnClick("status")}>
                  Status
                </button>
              </th>
              <th>
                <button onClick={() => handleColumnClick("id")}>ID</button>
              </th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredCats?.map((cat) => {
              return (
                <tr key={cat.id}>
                  <td>{cat.name}</td>
                  <td>{cat.arrived.slice(0, 10)}</td>
                  <td>{cat.age}</td>
                  <td>{cat.gender}</td>
                  <td>{cat.state}</td>
                  <td>{cat.status === true ? "activo" : "inactivo"}</td>
                  <td>{cat.id}</td>
                  <td>
                    <button>Edit button</button>
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
