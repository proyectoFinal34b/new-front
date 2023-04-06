import React, { useState, useEffect } from "react";
import { postCats, getCats } from "../../redux/actions";
import { useDispatch } from "react-redux";

function validate(input) {
    let errors = {};
  
    if (!input.name) {
      errors.name = "Se requiere un nombre";
    } else if (!input.name.match(/^[A-Za-z\s]+$/)) {
      errors.name = "Sólo letras por favor";
    }
  
    if (!input.age) errors.age = "La edad es obligatoria";
  
    if (!input.gender) {
      errors.gender = "Este campo es obligatorio";
    } 
  
    if (!input.description) errors.description = "Este campo es obligatorio";
  
    if (!input.state) {
      errors.state = "Debe seleccionar una opción";
    }   
    return errors;
  }
   
  

export default function PostCats() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [catState, setCatState] = useState({
    adoptado: false,
    apadrinado: false,
    enAlbergue: false,
  });

  const [input, setInput] = useState({
    name: "",
    age: "",
    gender: "",
    state: "",
    image: "",
    description: "",
    arrived: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    const { name, value } = e.target;
    let newValue = value;
  
    if (name === "state") {
      // Cambia el tipo de datos de `newValue` a una cadena
      newValue = String(value);
    }
  
    setInput((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  }
  
  
  
function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(input);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    dispatch(postCats(input));
    alert("Gato Creado");
    setInput({
      name: "",
      age: "",
      gender: "",
      state: {
        adoptado: null,
        apadrinado: null,
        albergue: null,
      },
      image: "",
      description: "",
      arrived: "",
    });
    setCatState({
      adoptado: false,
      apadrinado: false,
      enAlbergue: false,
    });
    setErrors({});
  }

  


  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  return (
    <div className="sticky top-3 flex justify-start items-center p-1">
    <div className="p-4 dark:bg-gray-900 rounded-md w-1/5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
        <label className="mb-2 font-bold text-gray-100">Nombre:</label>
        <input 
        type="text" 
        value={input.name} 
        name="name"
        onChange={(e) => {handleChange(e)}} 
        className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        {errors.name && (<p>{errors.name}</p>)}
        </div>
        <div>
  <label className="mb-2 font-bold text-gray-100">Género:</label>
  <select
    value={input.gender}
    name="gender"
    onChange={(e) => { handleSelect(e) }}
    className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
  >
    <option value="">Seleccione una opción</option>
    <option value="macho">Macho</option>
    <option value="hembra">Hembra</option>
  </select>
  {errors.gender && (<p>{errors.gender}</p>)}
</div>
        <div>
        <label className="mb-2 font-bold text-gray-100">Edad:</label>
        <input 
        type="number" 
        placeholder="1,2,3..."
        value={input.age} 
        name="age"  
        onChange={(e) => {handleChange(e)}}
        className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        {errors.age && (<p>{errors.age}</p>)}
        </div>
        <div>
        <label className="mb-2 font-bold text-gray-100">Descripción:</label>
        <input 
        type="text" 
        value={input.description} 
        name="description"
        onChange={(e) => {handleChange(e)}}
        className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        {errors.description && (<p>{errors.description}</p>)}
        </div>
        <div>
        <label className="mb-2 font-bold text-gray-100">Imagen:</label>
        <input 
        type="text"
        value={input.image}  
        name="image"  
        onChange={(e) => {handleChange(e)}}
        className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        </div>
        <div>
        <label className="mb-2 font-bold text-gray-100">Llegada:</label>
        <input 
        type="date"  
        placeholder="dd/mm/aaaa"
        value={input.arrived}
        name="arrived" 
        onChange={(e) => {handleChange(e)}}
        className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"/>
        </div>
        <div>
  <label className="mb-2 font-bold text-gray-100">Estado:</label>
  <select
    name="state"
    value={input.state}
    onChange={(e) => { handleSelect(e) }}
    className="mb-2"
  >
    <option value="">Selecciona un estado</option>
    <option value="adoptado">Adoptado</option>
    <option value="apadrinado">Apadrinado</option>
    <option value="enAlbergue">En Albergue</option>
  </select>
  {errors.state && (<p>{errors.state}</p>)}
</div>
        <button type="submit" className="ml-2 px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600">Enviar</button>
        </form>
        </div>
        </div>
        )
      }