import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions";


export default function CarruselProduct() {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState(0)
    const products = useSelector((state) => state.allProducts);
    const allProducts = products.filter(product=>product.active===true)
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    useEffect(() => {
        const timerId = setTimeout(handlerNext, 5000);
        return () => clearTimeout(timerId);
    }, [current]);

   
    const clearTimer = () => {
        clearTimeout();
    };

    const handlerPrev = () => {
        clearTimer();
        if (current === 0) {
            setCurrent(allProducts.length - 3)
        } else {
            setCurrent(current - 1)
        }
    }

    const handlerNext = () => {
        clearTimer();
        if (current === allProducts.length - 3) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    const array = [...allProducts].slice(current, current + 3)

    return (
        <>
            <div className="flex items-center m-auto justify-center dark:bg-gray-700 bg-gray-600 shadow-md text-white">
                <div className="flex flex-grow h-96 items-center justify-center hover:bg-gradient-to-r from-bgDark to-gray-700">
                    <button className="font-extrabold text-4xl w-full h-full  text-teal-300 hover:text-white" onClick={handlerPrev}>{"<"}</button>
                </div>
                <div className="flex justify-center m-auto w-9/12">
                    {array.map(product =>
                    <div className=" w-72 overflow-hidden h-full m-4 dark:bg-gray-900 bg-gray-900 pt-2 text-white"> 
                        <div className=" h-52">
                            {/* imagen */}
                            <img
                                src={product.image}
                                alt=""
                                className="w-52 h-48 m-auto my-4 object-contain md:w-40 md:h-40 md:mb-4 2xl:w-full 2xl:h-full rounded-md 2xl:m-auto"
                            />
                            </div>
                            <h3 className="font-semibold truncate text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-white mx-4">
                                {product.name}
                            </h3>
                            <div className="p-5 flex flex-col gap-3 ">

                                {/* precios */}
                                <div>
                                    <span className="text-xl font-bold dark:text-white">
                                        {"$" +
                                            (product.price - (product.discount?.value / 100) * product.price)}
                                    </span>
                                    <div className="flex items-center gap-1 mt-4 mb-4 justify-evenly dark:text-white">
                                        {product.discount.active ? (
                                            <div>
                                                <span className="text-sm line-through opacity-50 ">
                                                    {"$" + product.price}
                                                </span>
                                                <span className="bg-green-500 mx-2 px-1.5 py-0.5 rounded-md text-xs text-white">
                                                    save {product.discount.value}%
                                                </span>
                                                
                                            </div>
                                        ) : (
                                            <div>
                                                <span className="text-sm line-through opacity-50 text-gray-900"></span>
                                                <span className=" mx-2 px-1.5 py-0.5 rounded-md text-xs text-gray-900"></span>
                                            </div>
                                            
                                        )}
                                    </div><div>
                                    <a
            href={`/productos/${product.id}`}
            class="bg-teal-500/80 hover:bg-teal-500/90 px-6 py-2 rounded-md text-white font-medium tracking-winder transition"
          >
            Ir a detalles
          </a>
                                            </div>
                                </div>
                            </div> 
                        </div>
                    )}
                </div>
                <div className="flex flex-grow h-96 items-center justify-center hover:bg-gradient-to-r from-gray-700 to-bgDark">
                    <button className="font-extrabold text-4xl w-full h-full  text-teal-300 hover:text-white" onClick={handlerNext}>{">"}</button>
                </div>
            </div>
        </>
    )
}