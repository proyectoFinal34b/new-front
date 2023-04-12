import React, {  useState } from "react";
import CardsGeneral from "./cardsGeneral";

export default function General ({cats, orders}) {

    return (
        <>
        <div>
            <CardsGeneral cats={cats} orders={orders} ></CardsGeneral>
        </div>
        <div id="chart">
            <div>
                <h1>Ventas</h1>

            </div>
        </div>
        </>
    )
}