import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../../redux/actions";
import style from './SearchBar.module.css'

export default function SearchCats (){
const dispatch = useDispatch()
const allCats = useSelector(state => state.cats);
const [name, setName] = useState("")

function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      dispatch(getCats(name));
  
      setName("");
    } else {
      alert("Ingrese un gato");
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

return(
    <div>
        <input
        className={style.boton}
        type="text"
        value={name}
        placeholder="Gato..." 
        onChange={(e) => handleChange(e)}
        />
        <button className={style.boton2} type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
)
}