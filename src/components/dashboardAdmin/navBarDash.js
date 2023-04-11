import React from "react";

export default function NavBarDash ({props}) {

    return(
        <>
        <div id="admin-view " className="bg-white flex max-h-fit px-6 py-2 my-1 items-start justify-end shadow-md">
          <h1 className="my-auto mx-4">Hola {props?.name}!</h1>
          <img src={props?.image} class="w-16 h-16 object-cover rounded-full"></img>
        </div>
        </>
    )
}