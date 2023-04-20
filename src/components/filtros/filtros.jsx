import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { currentPageFunction, filterCats, getCats } from "../../redux/actions";
import SearchBar from "../searchbar/Searchbar"

export default function GatosFiltrados() {
  const dispatch = useDispatch();
  const [filtroStatus, setFiltroStatus] = useState("");
  const [filtroGender, setFiltroGender] = useState("");
  const [filtroAge, setFiltroAge] = useState("");

  const gatos = useSelector((state) => state.cats);

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  function aplicarFiltros(state, gender, age) {
    let tempGatos = gatos;
    
    if (state) {
      tempGatos = tempGatos.filter((gato) => gato.state === state);
    }
    
    if (gender) {
      tempGatos = tempGatos.filter((gato) => gato.gender.toLowerCase() === gender);
    }
    
    if (age) {
      if (age==="5"){
        tempGatos = tempGatos.filter((gato) => gato.age >= parseInt(age));
      } else {
        tempGatos = tempGatos.filter((gato) => gato.age === parseInt(age));
      }
    }
    
    return tempGatos;
  }

  useEffect(() => {
    const gatosFiltrados = aplicarFiltros(filtroStatus, filtroGender, filtroAge);
    dispatch(filterCats(gatosFiltrados));
  }, [filtroStatus, filtroGender, filtroAge]);

  

  return (
    <div className="bg-slate-100 p-4 w-full lg:sticky lg:top-28 lg:w-full  dark:bg-gray-900 rounded-md ">
      <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Gatos</h2>
      <div className="flex flex-col mb-3">
        <label htmlFor="status" className="mb-2 font-bold text-gray-800 dark:text-gray-100">
          Estado:
        </label>
        <select
          id="state"
          onChange={(e) =>(setFiltroStatus(e.target.value),dispatch(currentPageFunction(1)))}
          value={filtroStatus}
          className="md:px-0 md:w-full rounded-md shadow-md  focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
        >
          <option value="">Todos los gatos</option>
          <option value="albergue">En Albergue</option>
          <option value="adoptado">Adoptado</option>
          <option value="apadrinado">Apadrinado</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="gender" className="mb-2 font-bold text-gray-800 dark:text-gray-100">
          Sexo:
        </label>
        <select
          id="gender"
          onChange={(e) => (setFiltroGender(e.target.value),dispatch(currentPageFunction(1)))}
          value={filtroGender}
          className="md:px-1 md:w-full rounded-md shadow-md   focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
        >
          <option value="">Cualquier Sexo</option>
          <option value="hembra">Hembra</option>
          <option value="macho">Macho</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="age" className="mb-2 font-bold text-gray-800 dark:text-gray-100">
          Edad:
        </label>
        <select
          id="age"
          onChange={(e) =>( setFiltroAge(e.target.value),dispatch(currentPageFunction(1)))}
          value={filtroAge}
          className="md:px-1 md:w-full rounded-md shadow-md  focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
        >
          <option value="">Cualquier edad</option>
          <option value="0">0 años</option>
          <option value="1">1 año</option>
          <option value="2">2 años</option>
          <option value="3">3 años</option>
          <option value="4">4 años</option>
          <option value="5">5 años o mas</option>
        </select>
        <SearchBar/>
      </div>
    </div>
    // </div>
  );
}
