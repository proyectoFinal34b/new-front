import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct, getProduct } from "../../../redux/actions";

export default function ProductFiltrados(props) {
    const dispatch = useDispatch();
    const [filtroPrice, setFiltroPrice] = useState("");
    const [filtroAlfabetico, setFiltroAlfabetico] = useState("");
    const [filtroCategory, setFiltroCategory] = useState("");
    const productos = useSelector((state) => state.allProducts);

    useEffect(() => {
        dispatch(getProduct());
      }, [dispatch]);

    function aplicarFiltrosProductos( alfabetico,price ){
        let tempProductos = productos;
        // console.log(productos,tempProductos)
    //  if (category) {
    // tempProductos = tempProductos.filter(producto => producto.category === category);
    // }
    if (alfabetico){
        if (alfabetico === "ascendente") {
           tempProductos= tempProductos.sort((a, b) => a.name.localeCompare(b.name));

    } else if (alfabetico === "descendente") {
      
        tempProductos=tempProductos.sort((a, b) => b.name.localeCompare(a.name));
     }
    }
     if (price){
        if (price === "ascendente") {
    tempProductos.sort((a, b) => a.price - b.price);
    } else if (price === "descendente") {
    tempProductos.sort((a, b) => b.price - a.price);
    }
     }
      
     console.log(tempProductos)
    return tempProductos
}

    const productosFiltrados = aplicarFiltrosProductos( filtroAlfabetico, filtroPrice);

    useEffect(() => {
        dispatch(filterProduct(productosFiltrados));
       props.setPrueba(!props.prueba)
      }, [ filtroAlfabetico, filtroPrice]);
    
    
    return(
        // <div className="sticky top-3 flex justify-start items-center p-1">
            <div className="p-4 w-full md:sticky md:top-3 md:w-full dark:bg-gray-900 rounded-md ">
            <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Productos</h2>
            {/* category */}
                {/* <div className="flex flex-col mb-3">
                <label htmlFor="category" className="mb-2 font-bold text-gray-100">
                Categoria:
                </label>
                <select
                id="category"
                onChange={(e) => setFiltroCategory(e.target.value)}
                value={filtroCategory}
                className="rounded-md border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
                >
                <option value="">Todas las categorias</option>
                <option value="albergue">Juguetes</option>
                <option value="adoptado">Limpieza</option>
                <option value="apadrinado">Comida</option>
                </select>
                </div> */}
            {/* orden alfabetico */}
                <div className="flex flex-col mb-4">
                <label htmlFor="alfabetico" className="mb-2 font-bold text-gray-500">
                Orden alfabetico:
                </label>
                <select
                id="alfabetico"
                onChange={(e) => setFiltroAlfabetico(e.target.value)}
                 value={filtroAlfabetico}
                className="rounded-md border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4 md:px-0"
                >
                <option value="">Cualquier orden</option>
                <option value="ascendente">A-z</option>
                <option value="descendente">Z-a</option>
                </select>
                </div>
            {/* price */}
                <div className="flex flex-col mb-4">
                <label htmlFor="price" className="mb-2 font-bold text-gray-500">
                Precio:
                </label>
                <select
                id="price"
                onChange={(e) => setFiltroPrice(e.target.value)}
                value={filtroPrice}
                className="rounded-md border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4 md:px-0"
                >
                <option value="">Cualquier precio</option>
                <option value="ascendente">Menor a mayor</option>
                <option value="descendente">Mayor a menor</option>
                </select>
                {/* Este input y button serian los searchbar */}
                <div>
                    <input type="text" className="border-2 md:w-full md:px-3 md:pr-8 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"></input>
                    <button className="md:w-2/3  px-5 py-2 my-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600">Buscar</button>
                </div>
                {/* Este input y button serian los searchbar */}
                </div>
            </div>
        // </div>
    )
}