import React from "react";

export default function Buttons (){
    const styleButton = "font-medium bg-[#A3E3DD] w-36 shadow-md p-2 rounded-sm hover:bg-[#0D9488] hover:text-white "
    return (
        <>
        <div className="m-4 space-x-6">
            <button className="font-medium bg-[#A3E3DD] shadow-md w-36 p-2 rounded-sm hover:bg-[#0D9488] hover:text-white ">Última semana</button>
            <button className={styleButton}>Último mes</button>
            <button className={styleButton}>Últimos 3 meses</button>
            <button className={styleButton}>Últimos 6 meses</button>
            <button className={styleButton}>Último año</button>
            <button className={styleButton}>Historico</button>
        </div>
        </>
    )
}