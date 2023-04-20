import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../../redux/actions";


export default function CarruselCat(){
    const dispatch = useDispatch()
    const [current, setCurrent] = useState(0)
    
    const cats = useSelector(state=>state.allCats)
    const allCats=cats.filter(cat=>cat.status===true)
    useEffect(()=>{
        dispatch(getCats())
    },[])
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        const timerId = setTimeout(handlerNext, 5000);
        return () => clearTimeout(timerId);
    }, [current]);
    
    const clearTimer = () => {
        if (timerId) {
            clearTimeout(timerId);
            setTimerId(null);
        }
    };
    
    const handlerPrev = ()=>{
        clearTimer();
        if(current===0){
            setCurrent(allCats.length - 3)
        }else{
            setCurrent(current-1)   
        }  
    }
    
    const handlerNext = ()=>{
        clearTimer();
        if(current === allCats.length - 3){
            setCurrent(0)
        }else{
            setCurrent(current+1)  
        }
    }
    
    const array = [...allCats].slice(current,current+3)
    return(
        <>
        <div className="flex m-auto justify-center items-center mt-5 dark:bg-gray-700 bg-gray-600 shadow-md text-white">
            <div className="flex flex-grow h-96 items-center justify-center">
                <button className="font-extrabold text-4xl w-full h-full hover:bg-gradient-to-r from-bgDark to-gray-700 " onClick={handlerPrev}>{"<"}</button>
            </div>
            <div className="flex justify-center w-9/12 m-auto">
            {array.map(cat=>
                <div className=" dark:bg-gray-900 bg-gray-900 w-72 m-10 border-1 border-dashed border-gray-900 shadow-2xl rounded-md overflow-hidden xl:h-96 " key={cat.id}>
                  <p className="m-3 text-gray-100 dark:text-gray-200 font-semibold text-2xl">{cat.name}</p>
                  <img src={cat.image} alt={cat.name} className="object-cover w-full h-56 m-auto my-4 object-center" />
                  <div className="mt-8 mb-4 flex flex-col md:flex md:flex-col space-y-4 xl:mt-8 xl:m-auto xl:flex xl:w-40 xl:justify-center">
                      <a  href={`/gatos/${cat.id}`}className="px-4 py-2 bg-teal-500 shadow-lg  rounded-lg text-white uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-700 active:bg-teal-400" >Mi Historia</a>
                    </div>
                    </div>
            )  }
            </div>
            <div className="flex flex-grow h-96 items-center justify-center">
                <button className="font-extrabold text-4xl w-full h-full hover:bg-gradient-to-r from-gray-700 to-bgDark" onClick={handlerNext}> {">"} </button>
            </div>
        </div>
        </>
    )
}