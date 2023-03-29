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
      <input type="text" placeholder="Search..." onChange={handleInputChange} value={searchText} />
      <button type="submit">Search</button>
    </form>
  );
}

