import React, { useState } from "react";
import Buttons from "./logic/buttons";
import { handleColumnClick, handlerClick, handlerClickType } from "./logic/handlers";
import Tabla from "./gatosView/tabla";
import ChartGeneral from "./charts/chart";
import { Modal } from "./modal";

export default function Gatos({ cats, viewHandler }) {

  const [filters, setFilters] = useState({
    date: "historico",
    type:"",
    column: "id",
    direction: "desc",
  });
  const [show, setShow] = useState([...cats])

  const handleColumnClickCat = (columnName) => {
  handleColumnClick(columnName, filters, setFilters, show, setShow)
};
  const handlerClickCat = (e) => {
    handlerClick(e, filters, setFilters, cats, setShow)
  };
  
  const handlerClickTypeCat = (e)=>{
    handlerClickType(e, filters, setFilters, cats, setShow, "state")
  }
  

  return (
    <>
      <h1>Soy la view gatos</h1>
  <ChartGeneral data={show} arg={filters.type} periodo={filters.date}></ChartGeneral>
  <div className="flex justify-center mx-10 my-5 space-x-5">
      <button className="focus:bg-green-200 font-medium bg-[#A3E3DD] w-36 shadow-md p-2 rounded-sm hover:bg-[#0D9488] hover:text-white " value="adoptado" onClick={handlerClickTypeCat}>Adoptado</button>
      <button className="focus:bg-green-200 font-medium bg-[#A3E3DD] w-36 shadow-md p-2 rounded-sm hover:bg-[#0D9488] hover:text-white " value="apadrinado" onClick={handlerClickTypeCat}>Apadrinado</button>
      <button className="focus:bg-green-200 font-medium bg-[#A3E3DD] w-36 shadow-md p-2 rounded-sm hover:bg-[#0D9488] hover:text-white " value="albergue" onClick={handlerClickTypeCat}>Albergue</button>
      <button  className="focus:bg-green-200 font-medium text-white bg-[#38797c] w-36 shadow-md p-2 rounded-sm hover:bg-[#0D9488] hover:text-white " >Añadir gatos</button>
  </div>    
      <Buttons handlerClick={handlerClickCat}></Buttons>

      <div id="table-cats">
    <Tabla handleColumnClickCat={handleColumnClickCat} show={show}></Tabla>
      </div>
    </>
  );
}
