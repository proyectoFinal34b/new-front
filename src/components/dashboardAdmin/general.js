import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats, getUsers } from "../../redux/actions";

export default function General () {
    const cats = useSelector( state=>state.allCats )
    const [info, setInfo] = useState({
        ventas:0,
        gatos:0 
    })
    console.log(cats, "cats de la view")
    const dispatch = useDispatch()

    const lastMonth = new Date()
    lastMonth.setMonth(lastMonth.getMonth() - 1)
    
    const adoptedCats = cats.filter(cat => 
        cat.state==="adoptado" && new Date(cat.updatedAt) > lastMonth
    )

    useEffect(()=>{
      dispatch(getUsers())
      dispatch(getCats())
        setInfo({...info, gatos:adoptedCats.length})
    },[dispatch])

    const changeHandler = ()=>{

    }


console.log(adoptedCats)

    return (
        <>
        <div id="tablas" className="flex">
            <div id="ventas" className="bg-red-100 w-1/5 mx-auto my-3 shadow-md">
            <h1>Ventas</h1>

            <h2>Cantidad de ventas el ultimo mes</h2>
            </div>
            <div id="adopciones" className="bg-red-100 w-1/5 mx-auto my-3 shadow-md">
            <h1>Adopciones</h1>
            <select onChange={changeHandler}>
                <option>Ultimo mes</option>
                <option>Ultimos tres meses</option>
                <option>Ultimos seis meses</option>
                <option>Ultimo año</option>
            </select>
            <h2>{info?.gatos}</h2>
            </div>
            <div id="usuarios" className="bg-red-100 w-1/5 mx-auto my-3 shadow-md">
            <h1>Apadrinamientos</h1>
            <h2>Cantidad de ventas el ultimo mes</h2>
            </div>
        </div>
        <div id="chart">

        </div>
        </>
    )
}