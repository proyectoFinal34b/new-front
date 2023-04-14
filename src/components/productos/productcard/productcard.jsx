import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions";


export default function Productcard(props) {

  const dispatch= useDispatch()

  function agregarAlCarro(id){
dispatch(addToCart(id))
  }
  return (
    <div className="flex m-auto mb-3 w-72 md:w-64 md:mb-4 2xl:w-96">

    <div className="bg-white w-full text-gray-700 sm:min-h-[524px] lg:min-h-[524px] 2xl:min-h-[605px] md:min-h-[34-rem] min-h-[31rem] shadow-lg rounded-md overflow-hidden md:w-96 md:mb-4 ">
      {/* imagen */}
      <img src={props.image} alt="" className="w-60 h-48 m-auto my-4 object-center md:w-40 md:h-40 md:mb-4 2xl:w-64 2xl:h-64" />
      <div className="p-5 flex flex-col gap-3 ">
        {/* tipo de producto */}
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 rounded-full text-xs bg-gray-100">Juguete</span>
      </div>
      <hr className="h-px my-3 bg-gray-900 border-0 dark:bg-gray-300"></hr>
      {/* titulo */}
      <h3 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">{props.name}</h3>
      {/* precios */}
      <div>
      <span className="text-xl font-bold">{"$" + (props.price-(props.discount?.value/100)*props.price)}</span>
      <div className="flex items-center gap-1 mt-4 justify-evenly ">
       {props.discount.active ?  <div><span className="text-sm line-through opacity-50 ">{"$" + props.price}</span>
        <span className="bg-green-500 mx-2 px-1.5 py-0.5 rounded-md text-xs text-white">save {props.discount.value}%</span></div> : ""}
      </div>
      </div>
      {/* rating */}
      <span className="flex items-center mt-1">{props.ratings}</span>
      {/* button */}
      <div className="mt-2 flex gap-2">
        <button onClick={()=>agregarAlCarro(props.id)} className="bg-teal-500/80 hover:bg-teal-500/90 px-6 py-2 rounded-md text-white font-medium tracking-winder transition">Agregar al carro</button>
        <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"><img class="opacity-50 w-6" src="https://cdn-icons-png.flaticon.com/512/109/109791.png" alt="" /></button>
       
      </div>
      <a href={`/productos/${props.id}`} class="bg-teal-500/80 hover:bg-teal-500/90 px-6 py-2 rounded-md text-white font-medium tracking-winder transition">Detalle</a>
      </div>
    </div>

  </div>
  );
}
