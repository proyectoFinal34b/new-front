import React, { useState } from "react";

export default function Buttons ({handlerClick}){
    const styleButton = "focus:bg-green-200 font-medium bg-[#A3E3DD] w-36 shadow-md p-2 rounded-sm hover:bg-[#0D9488] hover:text-white "
    const [filter, setFilter] =  useState("Mes actual")
  
    return (
        <>
        <div className="m-4 space-x-6">
            <button value="Ultima semana" onClick={(e)=>handlerClick(e.target.value)} className="font-medium bg-[#A3E3DD] shadow-md w-36 p-2 rounded-sm hover:bg-[#0D9488] hover:text-white ">Última semana</button>
            <button value="Mes actual" onClick={(e)=>handlerClick(e.target.value)} className={styleButton}>Mes Actual</button>
            <button value="Ultimos tres meses" onClick={(e)=>handlerClick(e.target.value)} className={styleButton}>Últimos 3 meses</button>
            <button value="Ultimos seis meses" onClick={(e)=>handlerClick(e.target.value)} className={styleButton}>Últimos 6 meses</button>
            <button value="Ultimo año" onClick={(e)=>handlerClick(e.target.value)} className={styleButton}>Último año</button>
            <button value="historico" onClick={(e)=>(console.log(e),handlerClick(e.target.value))} className={styleButton}>Historico</button>
        </div>
        </>
    )
}