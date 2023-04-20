import React, { useState } from "react";
import { sortTable } from "./logic/ordenamientoTablas";
import { CSVLink } from "react-csv";
import Buttons from "./logic/buttons";
import { handleColumnClick, handlerClick, handlerClickType } from "./logic/handlers";
import Example from "./charts/chart";

export default function Productos({ products, openModal }) {
  const stylesNameCol = "w-40 p-2 cursor-pointer";
  const stylesTd = "h-16 px-2 py-3 flex items-center mt-2";
  const [filters, setFilters] = useState({
    date: "historico",
    type:"",
    column: "id",
    direction: "desc",
  });
  const [show, setShow] = useState([...products])

  const handleColumnClickProducts = (columnName) => {
    handleColumnClick(columnName, filters, setFilters, show, setShow)
   };
   const handlerClickProductos = (e)=>{
     handlerClick(e, filters, setFilters, products, setShow)
   }
 
   const handlerClickTypeProductos = (e) => {
     handlerClickType(e, filters, setFilters, products, setShow, "stock")
   }

  const filteredProducts = sortTable(
    filters.column,
    filters.direction,
    products
  );

  //Creador de excel
const csvHeaders = [
  { label: "Nombre", key: "name" },
  { label: "Precio", key: "price" },
  { label: "Stock", key: "stock" },
  { label: "Categoría", key: "category" },
  { label: "Descuento activo", key: "discountActive" },
  { label: "Valor de descuento", key: "discountValue" },
  { label: "Activo", key: "active" },
  { label: "ID", key: "id" },
];

const csvData = filteredProducts.map((producto) => ({
  name: producto.name,
  price: producto.price,
  stock: producto.stock,
  category: producto.category.name,
  discountActive: producto.discount.active ? "Sí" : "No",
  discountValue: producto.discount.value + "%",
  active: producto.active ? "Sí" : "No",
  id: producto.id,
}));

const csvFileName = "productos.csv";

  return (
    <>

      <Example data={show} arg={filters.type} periodo={filters.date}></Example>
    
      <Buttons handlerClick={handlerClickProductos}></Buttons>
      <div>
        <table className="table-fixed cursor-default m-auto mt-10">
          <thead className="bg-tableCol  text-white ">        
              <th
              className="w-22 p-2"
              onClick={() => handleColumnClickProducts("name")}
            >
              Nombre
            </th>
            <th className="w-16 p-2" onClick={() => handleColumnClickProducts("price")}>Precio</th>
            <th className="w-16 p-2" onClick={() => handleColumnClickProducts("stock")}>Stock</th>
            <th className="w-16 p-2" onClick={() => handleColumnClickProducts("categoryId")}>Categoria</th>
            <th className={stylesNameCol} >Desc active</th>
            <th className={stylesNameCol} onClick={() => handleColumnClickProducts("desVal")}>Desc valor</th>
            <th className="w-20 p-2" onClick={() => handleColumnClickProducts("active")}>Activo</th>
            <th className="w-16 p-2" onClick={() => handleColumnClickProducts("id")}>ID</th>
            <th className={stylesNameCol}>Edit</th>
          </thead>
          <tbody>
            {filteredProducts?.map((productos) => {
              return (
                <tr key={productos.id} className="hover:bg-gray-300 shadow-md dark:text-black dark:bg-white dark:hover:bg-gray-400">
                  <td className={stylesTd}><img src={productos.image} alt={productos.image} className="w-16 h-14 mx-4 -mt-2 object-contain"/>{productos.name}</td>
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
                    <button name="productEdit" onClick={(e)=>(openModal(e.target.name), localStorage.setItem("productId", productos.id))} className="text-white shadow-md bg-teal-900 hover:bg-teal-500  font-medium rounded-lg text-sm px-4 py-1 text-center mr-3 md:mr-0 dark:bg-teal-400 dark:hover:bg-white-200 dark:focus:ring-teal-400">
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
