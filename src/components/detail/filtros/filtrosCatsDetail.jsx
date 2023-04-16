import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import { getCatsById } from "../../../redux/actions"


export default function DetailGatosFilter(props) {
    const dispatch = useDispatch();
    const catId = useSelector(state => state.catsById)
    const [renderPage, setRenderPage] = useState();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCatsById(id))
    }, [dispatch, id])

    return(
        <div class="flex flex-col bg-white">
            <div class="flex-1 flex items-center justify-center m-12">
                <div class="h-full grid grid-cols-2 rounded-lg p-5 flex-1 bg-gray-200 border-2 border-zinc-300 shadow-2xl">
                    <div class="flex justify-center break-after-right">
                        <img src={catId.image} alt={catId.name} class="flex w-full h-96 object-cover rounded shadow-lg"/>
                    </div>
                    <div class="flex h-96 items-center flex-col justify-center pl-5">
                        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-5xl underline pb-2">{catId.name}</h1>
                        <div class="text-gray-500">Edad: {catId.age}</div>
                        <div class="border border-gray-300 p-4 rounded-md mt-2 text-gray-500">{catId.description}</div> 
                        <div class="bg-green-500 text-white font-bold py-2 px-4 rounded-md border border-green-600 mt-1">Estado: {catId.state}</div>
                        <a href="" class="text-2xl dark:bg-gray-900 text-white font-bold py-2 px-12 rounded-md border mb-6 mt-3">ADOPTAR</a>
                    </div>
                </div>
            </div>






        </div>
    )
}