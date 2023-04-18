import React, {  useState } from "react";
import CardsGeneral from "./cardsGeneral";

export default function General ({cats, orders, users}) {

    return (
        <>
        <div>
            <CardsGeneral cats={cats} orders={orders} users={users} ></CardsGeneral>
        </div>
        <div id="chart ">
            <div className="dark:text-white">
                <h1>Ventas</h1>

            </div>
        </div>
        </>
    )
}