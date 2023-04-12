import React from "react";


export default function Productcard(props) {
  return (
    <div class="flex flex-col my-10">

    <div class="bg-white text-gray-700 w-72 min-h-10rem shadow-lg rounded-md overflow-hidden">
      {/* imagen */}
      <img src={props.image} alt="" class="w-full h-full object-cover" />
      <div class="p-5 flex flex-col gap-3">
        {/* tipo de producto */}
      <div class="flex items-center gap-2">
        <span class="px-3 py-1 rounded-full text-xs bg-gray-100">Juguete</span>
      </div>
      <hr class="h-px my-3 bg-gray-900 border-0 dark:bg-gray-300"></hr>
      {/* titulo */}
      <h3 class="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">{props.name}</h3>
      {/* precios */}
      <div>
      <span class="text-xl font-bold">$300</span>
      <div class="flex items-center gap-2 mt-1">
        <span class="text-sm line-through opacity-50">{"$" + props.price}</span>
        <span class="bg-green-500 px-1.5 py-0.5 rounded-md text-xs text-white">save 20%</span>
      </div>
      </div>
      {/* rating */}
      <span class="flex items-center mt-1">{props.ratings}</span>
      {/* button */}
      <div class="mt-5 flex gap-2">
        <button class="bg-teal-500/80 hover:bg-teal-500/90 px-6 py-2 rounded-md text-white font-medium tracking-winder transition">Agregar al carro</button>
        <button class="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"><img class="opacity-50 w-6" src="https://cdn-icons-png.flaticon.com/512/109/109791.png" alt="" /></button>
      </div>
      </div>
    </div>

  </div>
  );
}
