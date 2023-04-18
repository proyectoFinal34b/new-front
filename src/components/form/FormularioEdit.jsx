import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import validate from "./validation";
import axios from "axios"

export default function FormularioEdit() {
    const id = localStorage.getItem("catId")
    const getUser = JSON.parse(localStorage.getItem("userInfo"))
    const currentUser = getUser
    const idAdmin =currentUser.id
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
    sterilization:false,
    vaccinesFull:false,
    deworming:false,
    chip:false,
    hairType:""
  });
  function handleChange(e) {
    const { name, value } = e.target;
      setInput({
        ...input,
        [name]: value,
      });
      setErrors(validate({ ...input, [name]: value }));
      console.log(errors);
  }
  async function handleImageChange (e){
    const file= e.target.files[0];
    const newImage= await uploadImage(file);
    setInput({
        ...input,
        image: [newImage]
    })
    setErrors(validate({
        ...input,
        image: [newImage]
    }))
  }
  const uploadImage = async (file) => {
    let formData = new FormData();
    formData?.append("file", file);
    formData?.append("upload_preset", "bastet_preset");
    formData.append("api_key", 543988556363587);

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://api.cloudinary.com/v1_1/ddjt3rahz/image/upload",
      false
    );

    xhr.send(formData);
    const imageResponse = JSON.parse(xhr.responseText);
    return imageResponse.secure_url;
  };
  
  function handleSelect(e) {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "state") {
      newValue = String(value);
    }

    setInput((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(input);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    
    await axios.put(`/cat/${id}/admin/${idAdmin}`,{...input})
    .then(response=>{
      console.log(response)
        alert("Actulizado con exito")
    })
    .catch(error =>{
      console.log(error, "error")
        alert("Error al actualizar, verifique la informacion e intente nuevamente")
    })

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
      image: { URL: "", file: "" },
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
    async function fetchCat() {
      try {
        const response = await axios.get(`/cat/${id}`);
        const cat = response.data;
        setInput({
          name: cat.name,
          age: cat.age,
          gender: cat.gender,
          state: cat.state,
          image: cat.image,
          description: cat.description,
          arrived: cat?.arrived?.slice(0, 10),
          sterilization: cat.sterilization,
          vaccinesFull: cat.vaccinesFull,
          deworming: cat.deworming,
          chip: cat.chip,
          hairType: cat.hairType
        });
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchCat();
  }, [dispatch, id]);
  
console.log(input)
  const changeHandler = (e)=>{
    setInput({...input, [e.target.name]: !input[e.target.name]})
  }

  return (
    // <div className="sticky top-3 flex justify-end items-center p-1">
    <div className="p-4 shadow-lg text-gray-700 bg-gray-200 max-w-fit m-auto min-h-fit dark:text-gray-100 dark:bg-gray-900 ">
      <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Editar gato</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col">
        <label className="mb-2 font-bold dark:text-gray-100">Nombre:</label>
        <input 
        type="text" 
        placeholder="Nombre..."
        value={input.name} 
        name="name"
        onChange={(e) => {handleChange(e)}} 
        className="border border-gray-400 dark:text-slate-900 bg-white h-10 px-5 pr-16  rounded-sm text-sm focus:outline-none"
        />
        {errors.name && (<p>{errors.name}</p>)}
        </div>
        <div className="flex flex-col">
  <label className="mb-2 font-bold ">Género:</label>
  <select
    value={input.gender}
    name="gender"
    onChange={(e) => { handleSelect(e) }}
    className="border border-gray-400 bg-white h-10 px-5 pr-16  dark:text-slate-900 rounded-sm text-sm focus:outline-none"
  >
    <option value="" className="dark:text-slate-900">Seleccione una opción</option>
    <option value="macho" className="dark:text-slate-900">Macho</option>
    <option value="hembra" className="dark:text-slate-900">Hembra</option>
  </select>
  {errors.gender && (<p>{errors.gender}</p>)}
</div>
        <div className="flex flex-col">
        <label className="mb-2 font-bold ">Edad:</label>
        <input 
        type="number" 
        min="0"
        placeholder="1,2,3..."
        value={input.age} 
        name="age"  
        onChange={(e) => {handleChange(e)}}
        className="border border-gray-400 bg-white h-10 px-5 pr-16 dark:text-slate-900  rounded-sm text-sm focus:outline-none"
        />
        {errors.age && (<p>{errors.age}</p>)}
        </div>
        <div className="flex flex-col">
        <label className="mb-2 font-bold ">Descripción:</label>
        <input 
        type="text" 
        value={input.description} 
        name="description"
        placeholder="Descripción..."
        onChange={(e) => {handleChange(e)}}
        className="border dark:text-slate-900 border-gray-400 bg-white h-10 px-5 pr-16 rounded-sm text-sm focus:outline-none"
        />
        {errors.description && (<p>{errors.description}</p>)}
        </div>
        <div className="flex flex-col">
        <label className="mb-2 font-bold ">Imagen:</label>
{/*         {input.image.URL ? <img  className="border border-gray-400 bg-white h-50   focus:outline-none" src={input.image.URL} alt="imagen" /> :
        <img  className="border border-gray-400 bg-white h-50   focus:outline-none" src={input.image} alt="imagen" />} */}
       
        <input 

        type="file"
        name="image"  
        onChange={(e) => {handleImageChange(e)}}
        className="  dark:text-slate-900  bg-slate-100 pr-16  text-sm focus:outline-none"
        />
        {errors.image && (<p >{errors.image}</p>)}
        </div>
        <div className="flex flex-col">
        <label className="mb-2 font-bold ">Ingreso:</label>
        <input 
        type="date"  
        placeholder="dd/mm/aaaa"
        value={input.arrived}
        name="arrived" 
        onChange={(e) => {handleChange(e)}}
        className="border dark:text-slate-900 border-gray-400 bg-white h-10 px-5 pr-16 rounded-sm text-sm focus:outline-none"/>
        </div>
        <div className="flex flex-col">
  <label className="mb-2 font-bold ">Estado:</label>
  <select
    name="state"
    value={input.state}
    onChange={(e) => { handleSelect(e) }}
    className="mb-2 dark:text-slate-900"
  >
    <option value="" className="dark:text-slate-900">Selecciona un estado</option>
    <option value="adoptado" className="dark:text-slate-900">Adoptado</option>
    <option value="apadrinado" className="dark:text-slate-900">Apadrinado</option>
    <option value="enAlbergue" className="dark:text-slate-900">En Albergue</option>
  </select>
  {errors.state && (<p>{errors.state}</p>)}
  <label className="m-2 font-bold "> Ficha veterinaria </label>
  <div className="flex flex-col space-y-2 m-4">
  <label className="" > Esterilizado? : <input type="checkbox" checked={input.sterilization} name="sterilization" onChange={changeHandler}></input></label> 
  <label> Vacunas completas? : <input type="checkbox" name="vaccinesFull" checked={input.vaccinesFull} onChange={changeHandler}></input></label> 
  <label> Desparacitado? : <input type="checkbox" checked={input.deworming} name="deworming" onChange={changeHandler}></input></label> 
  <label> Chip? : <input type="checkbox" name="chip" checked={input.chip} onChange={changeHandler}></input></label>
  </div>
</div>
        <button type="submit" className="ml-2 px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 ">Enviar</button>
        </form>
        </div>
        // </div>
        )
      }