import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import { getProductsById,addToCart, getProduct,loadCart } from "../../../redux/actions"
import HoverRating from "../../productos/rating/rating";



export default function DetailProductosFilter(props) {
    const carrito = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const productId = useSelector(state => state.productsById)
    const [renderPage, setRenderPage] = useState();
    const { id } = useParams()
console.log(id,productId)
    useEffect(() => {
        dispatch(getProductsById(id))
        dispatch(getProduct())
    }, [dispatch, id])
    useEffect(() => {
        const local= JSON.parse(localStorage.getItem("carrito"))
        if(local?.length) {
          dispatch(loadCart(local))
        }
      }, []);
    async function agregarAlCarro() {
        dispatch(addToCart(productId.id))
         
         localStorage.setItem("carrito", JSON.stringify(carrito?.items));
       }
    return(
        <div className="flex flex-col bg-white">
            <div className="flex-1 flex items-center justify-center m-12">
                <div className="h-full grid grid-cols-2 rounded-lg p-5 flex-1 bg-gray-200 border-2 border-zinc-300 shadow-2xl">
                    <div className="flex justify-center break-after-right">
                        <img src={productId.image} alt={productId.name} className="flex w-full h-96 object-cover rounded shadow-lg"/>
                    </div>
                    <div className="flex h-96 align-items-left flex-col justify-center pl-5">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl underline pb-2">{productId.name}</h1>
                        <div className="border border-gray-300 p-4 rounded-md mt-4 text-gray-500">{productId.summary}</div> 
                        <div className="text-gray-500 mt-1 mb-5">Stock: {productId.stock}</div>
                        <div className="text-black font-bold py-2 px-4 rounded-md border border-green-600">Precio: ${productId.price}</div>
                        <button  onClick={() => agregarAlCarro()} className="bg-green-500 text-white font-bold py-2 px-4 rounded-md border border-green-600 mt-5">
                         Agregar al carro 
                        </button> 
                        <HoverRating/>
                    </div>
                </div>
            </div>
        </div>
    )
}
