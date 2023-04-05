import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    } else if (input.gender !== "Macho" && input.gender !== "Hembra") {
      errors.gender = "El género debe ser 'Macho' o 'Hembra'";
    }
  
    if (!input.description) errors.description = "Este campo es obligatorio";
  
    if (
      !input.state.adoptado &&
      !input.state.apadrinado &&
      !input.state.albergue &&
      Object.keys(errors).length === 0
    ) {
      errors.state = "Debe seleccionar al menos una opción";
    }
  
    return errors;
  }

export default function PostCats() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    adoptado: false,
    apadrinado: false,
    albergue: false,
  });

  const [input, setInput] = useState({
    name: "",
    age: "",
    gender: "",
    state: {
      adoptado: false,
      apadrinado: false,
      albergue: false,
    },
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


  function handleCheckbox(e) {
    const { name, checked } = e.target;
    setState((prevState) => ({ ...prevState, [name]: checked }));
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
        adoptado: false,
        apadrinado: false,
        albergue: false,
      },
      image: "",
      description: "",
      arrived: "",
    });
    navigate.push("/home");
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
        <input
        type= "text"
        placeholder="Macho/Hembra"
        value= {input.gender}
        name="gender" 
        onChange={(e) => {handleChange(e)}}
        className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
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
        <div>
        <label>Adoptado</label>
        <input 
        type="checkbox" 
        name="state" 
        value="adoptado" 
        onChange={handleCheckbox}/>
        </div>
        <div>
        <label>Apadrinado</label>
        <input 
        type="checkbox"
        name="apadrinado" 
        value="apadrinado" 
        onChange={handleCheckbox}/>
        </div>
        <div>
        <label>En albergue</label>
        <input 
        type="checkbox"
        name="albergue" 
        value="albergue" 
        onChange={handleCheckbox}/>
        </div>
        {errors.state && <p>Debe seleccionar una opción</p>}
        </div>
        <button type="submit" className="ml-2 px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600">Enviar</button>
        </form>
        </div>
        </div>
        )
      }