import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import { getCatsById,getCats } from "../../../redux/actions"
import Loader from "../../dashboardAdmin/loading";
import CarruselCat from "../../Carrusel/CarruselCat";



export default function DetailGatosFilter(props) {
    const stylescharmander="columns-2 border-b border-gray-400"
    const stylesbtn="font-semibold w-48 mt-10 flex items-center m-auto justify-center bg-teal-500 rounded-md py-1 "
    const dispatch = useDispatch();
    const catId = useSelector(state => state.catsById)
    const [renderPage, setRenderPage] = useState();
    const { id } = useParams()
    useEffect(() => {
        dispatch(getCatsById(id))
    }, [dispatch, id])
    return (
        catId?.length!==0?
        <div class="lg:w-4/5 sm:w-3/5 sm:p-5 w-full m-auto bg-slate-300 shadow-xl dark:bg-slate-600 dark:text-white p-4 mb-20 mt-20 flex flex-col">
            <h1 className="text-3xl font-bold mb-5 mt-5 sm:flex sm:justify-center">Conozcamos a <p className="text-teal-500 sm:ml-2">{catId.name}</p></h1>
            <div className="lg:flex lg:shadow-lg lg:-mb-14 lg:pb-5">
                <div className="lg:w-3/5 lg:h-[500px]">
                        <img src={catId.image} alt={catId.image} className="sm:p-5 w-4/5 m-auto h-4/5 object-cover rounded mb-5" />
                    </div>
                <div className="">
                    <div className="columns-2 flex flex-wrap mb-5">
                        <h1 className="text-xl font-bold w-full mb-5">CARACTERÍSTICAS DE MI</h1>
                        <div className=" m-auto space-y-2 ">
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Edad</p>
                                <p className=" w-28">{catId.age}</p>
                            </div>
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Estado</p>
                                <p>{catId?.state === 'Albergue' ? "En Adopción" : catId.state.charAt(0).toUpperCase()+catId.state.slice(1)}</p>
                            </div>
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Sexo</p>
                                <p>{catId?.gender.charAt(0).toUpperCase() + catId.gender.slice(1)}</p>
                            </div>
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Tipo de Pelo</p>
                                <p className=" w-28">{catId?.hairType.charAt(0).toUpperCase()+catId.hairType.slice(1)}</p>
                            </div>
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Ingreso</p>
                                <p>{catId?.arrived?.slice(0, 10)?.split("-")?.reverse()?.join("-")}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="columns-2 flex flex-wrap mb-5 ">
                        <h1 className="text-xl font-bold w-full mb-5 ">MI FICHA VETERINARIA</h1>
                        <div className=" m-auto space-y-2 ">
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Esterilización</p>
                                <p>{catId.sterilization===true?'Si':'No'}</p>
                            </div>
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Vacunas</p>
                                <p>{catId.vaccinesFull===true?'Si':'No'}</p>
                            </div>
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Desparasitación</p>
                                <p>{catId.deworming===true?'Si':'No'}</p>
                            </div>
                            <div className={stylescharmander}>
                                <p className="font-semibold w-28">Chip</p>
                                <p>{catId.chip===true?'Si':'No'}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <p className="lg:w-3/5 lg:-mt-14 lg:ml-10 mb-5">{catId.description}</p>
            <div>
            <h1 className="text-2xl font-bold mb-5 mt-10 xl:mt-20">¿Me Queres Adoptar?</h1>
            <p className="lg:w-3/5 lg:m-auto">Si estás interesado en adoptarme, ¡genial! Puedes contactar a mis humanos cuidadores para obtener más información sobre el proceso de adopción, no estes triste por si no podes adoptarme existe la posibilidad de que me ayudes, siendo mi padrino. Ellos estarán más que felices de responder cualquier pregunta que tengas sobre mí. Gracias por considerar darme un hogar amoroso. Mientras espero por una familia, mis cuidadores humanos me brindan amor y atención diariamente.</p>
        <div className="lg:flex space-x-10 justify-center lg:px-28">
        <Link to="/formadopcion">
        <button className={stylesbtn}>
            ADOPTAME<img className="h-9 ml-2" src="https://em-content.zobj.net/thumbs/160/samsung/349/paw-prints_1f43e.png"/>
        </button>
        </Link>
        <Link to="/formapadrinamiento">
        <button className={stylesbtn}>
            APADRINAME<img className="h-9 ml-2 p-1" src="https://em-content.zobj.net/thumbs/120/samsung/349/red-heart_2764-fe0f.png"/>
        </button>
        </Link>
        </div>
        </div>
        <div className="hidden xl:inline mt-10 bg-gray-800 shadow-md">
            <h1 className="font-extrabold text-2xl h-10 mt-2 flex justify-center items-center text-white shadow-md">Conoce más Historias</h1>
            <CarruselCat/>
        </div>
        </div> : <Loader></Loader>
    )
}