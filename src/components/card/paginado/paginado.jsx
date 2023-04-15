import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPageFunction } from "../../../redux/actions";

export default function Paginado({
  elementsPerPage,
  allelements,
}) {
  const pageNumbers = [];
  const dispatch = useDispatch()
  const currentPage = useSelector(state=>state.currentPage)

  for (let i = 1; i <= Math.ceil(allelements / elementsPerPage); i++) {
    //cantidad de elementos totales, dividido limite de elementos por pagina
    pageNumbers.push(i);
  }
  function handleprev(e) {
    e.preventDefault();
    if (currentPage > 1) {
      dispatch(currentPageFunction(currentPage -1))
    } 
  }
  function handlenext(e) {
    e.preventDefault();
    if (currentPage < pageNumbers.length) {
      dispatch(currentPageFunction(currentPage +1))
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
          <li onClick={() => dispatch(currentPageFunction(number))} key={number}>
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
