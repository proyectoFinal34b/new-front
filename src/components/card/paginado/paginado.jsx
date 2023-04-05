import React from "react";

export default function Paginado({
  catsPerPage,
  allcats,
  paginado,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allcats / catsPerPage); i++) {
    //cantidad de elementos totales, dividido limite de elementos por pagina
    pageNumbers.push(i);
  }
  function handleprev(e) {
    e.preventDefault();
    if (currentPage > 1) {
      paginado(currentPage - 1);
    }
  }
  function handlenext(e) {
    e.preventDefault();
    if (currentPage < pageNumbers.length) {
      paginado(currentPage + 1);
    }
  }
  return (
    <ul className="flex justify-center mt-20 items-center space-x-2">
      <li
        className=" bg-gray-300 text-gray-600 rounded-md py-1 px-2 cursor-pointer"
        onClick={(e) => handleprev(e)}
      >
        {"<"}
      </li>
      {pageNumbers.length &&
        pageNumbers.map((number) => (
          <li onClick={() => paginado(number)} key={number}>
            <button
              className={
                currentPage === number
                  ? "bg-gray-500 text-gray-600 rounded-md py-1 px-2 cursor-pointer hover:bg-gray-400 hover:text-gray-800 focus:outline-none"
                  : "bg-gray-300 text-gray-600 rounded-md py-1 px-2 cursor-pointer hover:bg-gray-400 hover:text-gray-800 focus:outline-none"
              }
              type="button"
            >
              {number}
            </button>
          </li>
        ))}
      <li
        className="bg-gray-300 text-gray-600 rounded-md py-1 px-2 cursor-pointer"
        onClick={(e) => handlenext(e)}
      >
        {">"}
      </li>
    </ul>
  );
}
