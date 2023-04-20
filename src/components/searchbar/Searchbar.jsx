// import React, { useState } from 'react';

// export default function SearchBar(props) {
//   const [searchText, setSearchText] = useState('');

//   const handleInputChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Searching for ${searchText}`);

//     // Lógica de búsqueda
//     const filteredResults = props.results.filter((result) => {
//       return result.title.toLowerCase().includes(searchText.toLowerCase());
//     });

//     props.onSearch(filteredResults);
//   };

//   return (
//     <form onSubmit={handleSearchSubmit}>   
//     <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//       <div class="relative">
//         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//         </div>
//         <input type="search" id="default-search" onChange={handleInputChange} value={searchText} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
//         <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
//       </div>
//   </form>
// );
// }

import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCats } from "../../redux/actions";
import Swal from 'sweetalert2';


export default function SearchBar() {
  const dispatch = useDispatch();
  const allCats = useSelector(state => state.allCats);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      dispatch(searchCats(name))
        .then((response) => {
          console.log(response);
          if (response.payload.length === 0) {
            Swal.fire({
              title: `No se encontró ningún gato llamado ${name}`,
              icon: 'warning'
            });
          }
        })
        .catch((error) => console.log(error));
      setName("");
    } else {
      Swal.fire({
        title: 'Ingrese un gato',
        icon: 'error',
        confirmButtonColor: "#228883",
        timer: "5000",
        timerProgressBar: true,
      position: "top",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      });
    }
  }


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (name) {
  //     dispatch(searchCats(name)) 
  //     .then((response)=>console.log(response))
  //     setName("")
  //     if (allCats.length === 0) {
  //       alert(`No se encontró ningún gato llamado ${name}`);
  //     }
  //   } else {
  //     alert("Ingrese un gato.");
  //   }
  // }


  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  return (
    <div className="justify-center mt-2">
      <h1  className="mt-5 font-bold text-gray-800 dark:text-gray-100">Busca por nombre:</h1>
      <input
        type="text"
        value={name}
        placeholder="Gato.."
        onChange={(e) => handleChange(e)}
        className=" md:w-full md:px-3 md:pr-8 shadow-lg my-3   bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className="md:w-2/3  px-5 py-2 my-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-400"
      >
        Buscar
      </button>
    </div>
  );
}