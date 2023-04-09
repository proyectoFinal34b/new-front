import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct, getProduct } from "../../../redux/actions";




export default function ProductFiltrados() {
    const dispatch = useDispatch();
    const [filtroPrice, setFiltroPrice] = useState("");
    const [filtroAlfabetico, setFiltroAlfabetico] = useState("");
    const [filtroCategory, setFiltroCategory] = useState("");

    const productos = useSelector((state) => state.allProducts);

    useEffect(() => {
        dispatch(getProduct());
      }, [dispatch]);

    function aplicarFiltrosProductos(price, alfabetico, category){
        let tempProductos = productos;
        console.log(productos,tempProductos)
     if (category) {
    tempProductos = tempProductos.filter(producto => producto.category === category);
    }
    if (alfabetico){
        if (alfabetico === "ascendente") {
    tempProductos.sort((a, b) => a.name.localeCompare(b.name));
    } else if (alfabetico === "descendente") {
    tempProductos.sort((a, b) => b.name.localeCompare(a.name));
     }
    }
     if (price){
        if (price === "ascendente") {
    tempProductos.sort((a, b) => a.price - b.price);
    } else if (price === "descendente") {
    tempProductos.sort((a, b) => b.price - a.price);
    }
     }
    
}

    const productosFiltrados = aplicarFiltrosProductos(filtroCategory, filtroAlfabetico, filtroPrice);

    useEffect(() => {
        dispatch(filterProduct(productosFiltrados));
        
      }, [filtroCategory, filtroAlfabetico, filtroPrice]);
    
    
    return(
        <div className="sticky top-3 flex justify-start items-center p-1">
            <div className="p-4 dark:bg-gray-900 rounded-md w-1/5">
            <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Productos</h2>
            {/* category */}
                <div className="flex flex-col mb-3">
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
                </div>
            {/* orden alfabetico */}
                <div className="flex flex-col mb-4">
                <label htmlFor="alfabetico" className="mb-2 font-bold text-gray-100">
                Orden alfabetico:
                </label>
                <select
                id="alfabetico"
                onChange={(e) => setFiltroAlfabetico(e.target.value)}
                 value={filtroAlfabetico}
                className="rounded-md border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
                >
                <option value="">Cualquier orden</option>
                <option value="hembra">A-z</option>
                <option value="macho">Z-a</option>
                </select>
                </div>
            {/* price */}
                <div className="flex flex-col mb-4">
                <label htmlFor="price" className="mb-2 font-bold text-gray-100">
                Precio:
                </label>
                <select
                id="price"
                onChange={(e) => setFiltroPrice(e.target.value)}
                value={filtroPrice}
                className="rounded-md border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
                >
                <option value="">Cualquier precio</option>
                <option value="1">Menor a mayor</option>
                <option value="2">Mayor a menor</option>
                </select>
                </div>
            </div>
        </div>
    )
}