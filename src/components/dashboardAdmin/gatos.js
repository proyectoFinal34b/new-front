import React, { useState } from "react";
import Buttons from "./logic/buttons";
import { handleColumnClick, handlerClick, handlerClickType } from "./logic/handlers";
import Tabla from "./gatosView/tabla";
import ChartGeneral from "./charts/chart";

export default function Gatos({ cats }) {

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
    handlerClickType(e, filters, setFilters, cats, setShow)
  }

  return (
    <>
      <h1>Soy la view gatos</h1>

  <ChartGeneral data={show} arg={filters.type} periodo={filters.date}></ChartGeneral>
      <button value="adoptado" onClick={handlerClickTypeCat}>Adoptado</button>
      <button value="apadrinado" onClick={handlerClickTypeCat}>Apadrinado</button>
      <button value="albergue" onClick={handlerClickTypeCat}>Albergue</button>
      <Buttons handlerClick={handlerClickCat}></Buttons>

      <div id="table-cats">
    <Tabla handleColumnClickCat={handleColumnClickCat} show={show}></Tabla>
      </div>
    </>
  );
}
