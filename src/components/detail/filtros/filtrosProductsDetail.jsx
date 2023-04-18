import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import { getProductsById,addToCart, getProduct,loadCart } from "../../../redux/actions"
import HoverRating from "../../productos/rating/rating";
import Loader from "../../dashboardAdmin/loading";



export default function DetailProductosFilter(props) {
    const carrito = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const productId = useSelector(state => state.productsById)
    const [renderPage, setRenderPage] = useState();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductsById(id))
        dispatch(getProduct())
    }, [dispatch, id])
    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("carrito"))
        if (local?.length) {
          dispatch(loadCart(local))
        }
      }, []);
    async function agregarAlCarro() {
        dispatch(addToCart(productId.id))
         
         localStorage.setItem("carrito", JSON.stringify(carrito?.items));
       }
    
       return (
        
        <>
        {/* DIV GENERAL */}

            <div className="xl:w-1/2 lg:w-2/3 sm:w-3/5 sm:p-5 w-full m-auto rounded-sm bg-slate-300 shadow-xl dark:bg-slate-600 dark:text-white p-4 mb-20 mt-20 flex flex-col items-center dark:shadow-xl">  
                {productId?.length!==0?
                <>
                <div className="">
                <div className="flex flex-col lg:flex-row justify-center items-center p-4 ">
                    <div className="flex w-3/6">
                <img src={productId.image} alt={productId.name} className="w-96 lg:w-full rounded-md object-fill m-auto shadow-md dark:shadow-md" />
                </div>
                <div className="lg:ml-32">
                <div><h1 className="font-semibold text-3xl overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-white p-3 -mt-2">{productId.name}</h1></div>
                <div><h1 className="dark:text-white mb-5">Estrellitas de Ranking</h1></div>
                
                {/* DIV DEL PRECIO Y DESCUENTO */}
                <div>
            <div className="">
              {productId.discount?.active ? (
                <div>
                  <span className="text-sm line-through dark:text-white ">
                    {"$" + productId.price}
                  </span>
                  
                </div>
              ) : ""}
            <div className=" items-center flex justify-center ">
            <span className="text-3xl font-bold dark:text-white px-4">
              {"$" +
                (productId.price - (productId.discount?.value / 100) * productId.price)}
            </span>
            
            <span className="bg-green-500 px-1.5 py-0.5 text-center items-center rounded-md text-lg text-white">
                    save {productId.discount?.value}%
                  </span>
                  </div>
                  </div>
          </div>
          <h1 className="dark:text-white text-xl mt-5 ">Stock Disponible</h1>
          <div className="text-lg font-bold dark:text-white mb-5">Stock: {productId.stock}</div>
          <button  onClick={() => agregarAlCarro()} className="bg-green-500 dark:text-white font-bold  rounded-md  w-full h-12 flex justify-center items-center text-black ">
                         Agregar al carro  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="19" r="2" />
  <circle cx="17" cy="19" r="2" />
  <path d="M17 17h-11v-14h-2" />
  <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
  <path d="M15 6h6m-3 -3v6" />
</svg></button> 

                        <HoverRating/>
                    </div>
                </div>
            </div>
            <div className="dark:text-white text-black p-10 flex justify-center items-center text-center text-lg w-5/6">Descripción: {productId.summary}</div>
          <h1 className="text-black"> ME FALTA UN PUTO CARRUSEL LALALALALALA</h1>
              </>:<Loader></Loader>}
        </div>
        </>
    )
}
