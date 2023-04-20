import React, { useEffect, useState } from "react";
import Buttons from "./logic/buttons";
import { handleColumnClick, handlerClick, handlerClickType } from "./logic/handlers";
import Tabla from "./gatosView/tabla";
import ChartGeneral from "./charts/chart";

export default function Gatos({ cats, openModal }) {
  const stylebtnCat="focus:bg-green-200 font-medium bg-[#A3E3DD] w-36 shadow-md p-2 rounded-sm hover:bg-[#0D9488] hover:text-white"
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

  useEffect(()=>{},[cats])
  

  return (
    <>


  <ChartGeneral data={show} arg={filters.type} periodo={filters.date}></ChartGeneral>
  <div className="flex justify-center mx-10 my-5 space-x-5">
      <button className={stylebtnCat} value="adoptado" onClick={handlerClickTypeCat}>Adoptado</button>
      <button className={stylebtnCat} value="apadrinado" onClick={handlerClickTypeCat}>Apadrinado</button>
      <button className={stylebtnCat} value="albergue" onClick={handlerClickTypeCat}>Albergue</button>
  </div>     
      <Buttons handlerClick={handlerClickCat}></Buttons>

      <div id="table-cats">
    <Tabla openModal={openModal} handleColumnClickCat={handleColumnClickCat} show={show}></Tabla>
      </div>
    </>
  );
}
