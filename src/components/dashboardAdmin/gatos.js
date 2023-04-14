import React, { useState } from "react";

import Buttons from "./logic/buttons";
import { handleColumnClick, handlerClick, handlerClickType } from "./logic/handlers";
import Tabla from "./gatosView/tabla";

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

  //Tabla excel


  return (
    <>
      <h1>Soy la view gatos</h1>
      <button value="adoptado" onClick={handlerClickTypeCat}>Adoptado</button>
      <button value="apadrinado" onClick={handlerClickTypeCat}>Apadrinado</button>
      <button value="albergue" onClick={handlerClickTypeCat}>Albergue</button>
      <Buttons handlerClick={handlerClickCat}></Buttons>

      <div id="table-cats">
    <Tabla handlerColumnClickCat={handleColumnClickCat} show={show}></Tabla>
      </div>
    </>
  );
}
