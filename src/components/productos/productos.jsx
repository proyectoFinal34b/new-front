import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../home/footer/footer";
import { Link } from "react-router-dom";
import cargando from "../../image/en-proceso.png"
import { getProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Productcard from "./productcard/productcard";
import Paginado from "../card/paginado/paginado";
import PostProduct from "./form/formulario";
import ProductFiltrados from "./filtros tienda/filtrosT";




export default function ProductosRender() {
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.allProducts)
    useEffect(()=>{dispatch(getProduct())},[])
    const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const indexOfLastproduct = currentPage * productsPerPage;
  const indexOfFirstproduct = indexOfLastproduct - productsPerPage;


    return (
        <div>
            <Navbar/>
            <div class="sticky top-3 flex justify-between items-center px-3 p-3">
            <ProductFiltrados/>
            <PostProduct/>
            </div>
            <div class="flex flex-col my-10 justify-center items-center">
            {products?.length?products
            .slice(indexOfFirstproduct, indexOfLastproduct)
            .map((e)=><Productcard 
            name={e.name}
            image={e.image}
            price={e.price}
            ratings={e.ratings}
            />)
            :
            <img src={cargando} alt="" />}
        </div>
            <Paginado
                elementsPerPage={productsPerPage}
                allelements={products?.length}
                paginado={setCurrentPage}
                currentPage={currentPage}/>
            <Footer/>
        </div>
    )
}