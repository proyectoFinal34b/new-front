import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import { getProductsById } from "../../../redux/actions"


export default function DetailProductosFilter(props) {
    const dispatch = useDispatch();
    const productId = useSelector(state => state.productsById)
    const [renderPage, setRenderPage] = useState();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductsById(id))
    }, [dispatch, id])

    return(
        <div class="flex flex-col bg-white">
            <div class="flex-1 flex items-center justify-center m-12">
                <div class="h-full grid grid-cols-2 rounded-lg p-5 flex-1 bg-gray-200 border-2 border-zinc-300 shadow-2xl">
                    <div class="flex justify-center break-after-right">
                        <img src={productId.image} alt={productId.name} class="flex w-full h-96 object-cover rounded shadow-lg"/>
                    </div>
                    <div class="flex h-96 align-items-left flex-col justify-center pl-5">
                        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-5xl underline pb-2">{productId.name}</h1>
                        <div class="border border-gray-300 p-4 rounded-md mt-4 text-gray-500">{productId.summary}</div> 
                        <div class="text-gray-500 mt-1 mb-5">Stock: {productId.stock}</div>
                        <div class="text-black font-bold py-2 px-4 rounded-md border border-green-600">Precio: ${productId.price}</div>
                        <a href="" class="bg-green-500 text-white font-bold py-2 px-4 rounded-md border border-green-600 mt-5">
                            Comprar  
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    )
}