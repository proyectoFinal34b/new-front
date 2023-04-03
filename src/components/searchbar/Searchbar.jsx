import React, { useState } from 'react';

export default function SearchBar(props) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchText}`);

    // Lógica de búsqueda
    const filteredResults = props.results.filter((result) => {
      return result.title.toLowerCase().includes(searchText.toLowerCase());
    });

    props.onSearch(filteredResults);
  };

  return (
    <form onSubmit={handleSearchSubmit}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" onChange={handleInputChange} value={searchText} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Gatos ..." required/>
        <button type="submit" class="text-gray absolute right-2.5 bottom-2.5 bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-400 dark:hover:bg-teal-500 dark:focus:ring-blue-800">Buscar</button>
      </div>
    </form>
  );
}

