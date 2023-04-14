import React, {  useState } from "react"
export default function CardsGeneral({cats, orders}){
        //estilos para que no este todo en el codigo
        const styleCard = "bg-teal-600 text-white text-xl rounded-md font-semibold w-1/5 mx-auto my-3 shadow-md "
        const styleSelect ="h-6 w-36 text-black text-center text-sm my-auto"
    
        const [ventasFilter, setVentasFilter] = useState("Mes actual");
        const [adopcionesFilter, setAdopcionesFilter] = useState("Mes actual");
        const [sponsorsFilter, setSponsorsFilter] = useState("Mes actual");
    
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        
        const filterByDate = (arg, filterValue) => {
          const date = new Date(arg);
          if (filterValue === "Mes actual") {
            return date > lastMonth;
          } else if (filterValue === "Ultimos tres meses") {
            const threeMonthsAgo = new Date();
            threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
            return date > threeMonthsAgo;
          } else if (filterValue === "Ultimos seis meses") {
            const sixMonthsAgo = new Date();
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
            return date > sixMonthsAgo;
          } else if (filterValue === "Ultimo año") {
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            return date > oneYearAgo;
          } else {
            return true;
          }
        };
        
        const adoptedCats = cats?.filter((cat) =>
        cat.state === "adoptado" && filterByDate(cat.updatedAt, adopcionesFilter)
      );
        const sponsoredCats = cats?.filter((cat) =>
         cat.state === "apadrinado" && filterByDate(cat.updatedAt, sponsorsFilter)
      );
        const ventasHechas = orders?.filter((order)=>
            order.delivery === "entregado" && filterByDate(order.createdAt, ventasFilter)
        ) 
    
    
        const changeHandlerVentas = (event)=>{
            setVentasFilter(event.target.value)
        }
        const changeHandlerAdopciones = (event) => {
            setAdopcionesFilter(event.target.value);
        };
        const changeHandlerSponsors = (event)=>{
            setSponsorsFilter(event.target.value)
        }
    return(
        <>
        <div id="tablas" className="flex">
            <div id="ventas" className={styleCard}>
            <h1>Ventas</h1>
            <select onChange={changeHandlerVentas} className={styleSelect}>
            <option value="Mes actual">Mes actual</option>
             <option value="Ultimos tres meses">Ultimos tres meses</option>
             <option value="Ultimos seis meses">Ultimos seis meses</option>
             <option value="Ultimo año">Ultimo año</option>
            </select>
            <h1>{ventasHechas.length}</h1>
            </div>
            <div id="adopciones" className={styleCard}>
            <h1>Adopciones</h1>
            <select value={adopcionesFilter} onChange={changeHandlerAdopciones} className={styleSelect}>
             <option value="Mes actual">Mes actual</option>
             <option value="Ultimos tres meses">Ultimos tres meses</option>
             <option value="Ultimos seis meses">Ultimos seis meses</option>
             <option value="Ultimo año">Ultimo año</option>
            </select>
            <h2>{ adoptedCats.length }</h2>
            </div>
            <div id="usuarios" className={styleCard}>
            <h1>Apadrinamientos</h1>
            <select onChange={changeHandlerSponsors} className={styleSelect}>
            <option value="Mes actual">Mes actual</option>
             <option value="Ultimos tres meses">Ultimos tres meses</option>
             <option value="Ultimos seis meses">Ultimos seis meses</option>
             <option value="Ultimo año">Ultimo año</option>
            </select>
            <h1>{ sponsoredCats.length }</h1>
            </div>
        </div>
        </>
    )
}
