// import React, { useState, useEffect } from "react";

// const Gatos = [
//   { id: 1, nombre: 'Mittens', status: 'Adoptado', edad: 2, sexo: 'Hembra' },
//   { id: 2, nombre: 'Toby', status: 'En albergue', edad: 4, sexo: 'Macho' },
//   { id: 3, nombre: 'Socks', status: 'Apadrinado', edad: 3, sexo: 'Hembra' },
//   { id: 4, nombre: 'Oliver', status: 'Adoptado', edad: 1, sexo: 'Macho' },
//   { id: 5, nombre: 'Luna', status: 'Apadrinado', edad: 5, sexo: 'Hembra' },
//   { id: 6, nombre: 'Simba', status: 'En albergue', edad: 2, sexo: 'Macho' },
//   { id: 7, nombre: 'Ginger', status: 'En albergue', edad: 4, sexo: 'Hembra' },
//   { id: 8, nombre: 'Whiskers', status: 'Adoptado', edad: 3, sexo: 'Macho' },
//   { id: 9, nombre: 'Milo', status: 'En albergue', edad: 2, sexo: 'Macho' },
//   { id: 10, nombre: 'Misty', status: 'Apadrinado', edad: 1, sexo: 'Hembra' },
// ];

// export default function GatosFiltrados() {
//   const [gatos, setGatos] = useState(Gatos);
//   const [filtroStatus, setFiltroStatus] = useState("");
//   const [filtroSexo, setFiltroSexo] = useState("");
//   const [filtroEdad, setFiltroEdad] = useState("");

//   function aplicarFiltros(status, sexo, edad)  {
//     let tempGatos = Gatos;
  
//     if (status) {
//       tempGatos = tempGatos.filter((gato) => gato.status === filtroStatus);
//     }
//     if (sexo) {
//       tempGatos = tempGatos.filter((gato) => gato.sexo === filtroSexo);
//     }
//     if (edad) {
//       tempGatos = tempGatos.filter((gato) => gato.edad === parseInt(filtroEdad));
//     }
//     setGatos(tempGatos);
//   }

//   useEffect(() => {
//     aplicarFiltros(filtroStatus, filtroSexo, filtroEdad);
//   }, [filtroStatus, filtroSexo, filtroEdad]);

//   return (
//     <div>
//       <h2>Gatos en adopción</h2>
//       <div>
//         <label htmlFor="status">Estado:</label>
//         <select
//           id="status"
//           onChange={(e) => setFiltroStatus(e.target.value)}
//           value={filtroStatus}
//         >
//           <option value="">Todos los gatos</option>
//           <option value="En albergue">En Albergue</option>
//           <option value="Adoptado">Adoptado</option>
//           <option value="Apadrinado">Apadrinado</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="sexo">Sexo:</label>
//         <select
//           id="sexo"
//           onChange={(e) => setFiltroSexo(e.target.value)}
//           value={filtroSexo}
//         >
//           <option value="">Cualquier Sexo</option>
//           <option value="Hembra">Hembra</option>
//           <option value="Macho">Macho</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="edad">Edad:</label>
//         <select
//           id="edad"
//           onChange={(e) => setFiltroEdad(e.target.value)}
//           value={filtroEdad}
//         >
//           <option value="">Cualquier edad</option>
//           <option value="1">1 año</option>
//           <option value="2">2 años</option>
//           <option value="3">3 años</option>
//           <option value="4">4 años</option>
//           <option value="5">5 años</option>
//         </select> 
//       </div>
//       <ul>
//         {gatos.map((gato) => (
//           <li key={gato.id}>
//             <p>Nombre: {gato.nombre}</p>
//             <p>Raza: {gato.status}</p>
//             <p>Sexo: {gato.sexo}</p>
//             <p>Edad: {gato.edad} años</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCats, getCats } from "../../redux/actions";
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
      }
      else{
      tempGatos = tempGatos.filter((gato) => gato.age === parseInt(age));}
    }
    console.log(tempGatos)
    return tempGatos;
  }

  const gatosFiltrados = aplicarFiltros(filtroStatus, filtroGender, filtroAge);
  
  
  useEffect(() => {
    dispatch(filterCats(gatosFiltrados));
    
  }, [filtroStatus, filtroGender, filtroAge]);

  return (
    // <div className="sticky top-3 flex justify-start items-center p-1">
    <div className="p-4 w-full md:sticky md:top-3 md:w-full dark:bg-gray-900 rounded-md ">
      <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Gatos</h2>
      <div className="flex flex-col mb-3">
        <label htmlFor="status" className="mb-2 font-bold text-gray-500 dark:text-gray-100">
          Estado:
        </label>
        <select
          id="state"
          onChange={(e) => setFiltroStatus(e.target.value)}
          value={filtroStatus}
          className="md:px-0 md:w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
        >
          <option value="">Todos los gatos</option>
          <option value="albergue">En Albergue</option>
          <option value="adoptado">Adoptado</option>
          <option value="apadrinado">Apadrinado</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="gender" className="mb-2 font-bold text-gray-500 dark:text-gray-100">
          Sexo:
        </label>
        <select
          id="gender"
          onChange={(e) => setFiltroGender(e.target.value)}
          value={filtroGender}
          className="md:px-1 md:w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
        >
          <option value="">Cualquier Sexo</option>
          <option value="hembra">Hembra</option>
          <option value="macho">Macho</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="age" className="mb-2 font-bold text-gray-500 dark:text-gray-100">
          Edad:
        </label>
        <select
          id="age"
          onChange={(e) => setFiltroAge(e.target.value)}
          value={filtroAge}
          className="md:px-1 md:w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-10 px-4"
        >
          <option value="">Cualquier edad</option>
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
