import { postProduct } from "../../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import validate from "./validations";
import axios, { all } from "axios";

export default function PostProduct() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([])

  useEffect(()=>{
   async function getCategories (){
    try {
      const categories = await axios.get("/category").then(response => response.data)
      setCategories(categories)
    } catch (error) {
      console.log(error)
    }}
  getCategories()
  },[])

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    image: [],
    summary: "",
    categoryId:6,
    discount:{
      active:false,
      value:0
    }
  });

  function handleChange(e) {
    const { name, value } = e.target;
      setInput({
        ...input,
        [name]: value,
      });
      setErrors(validate({ ...input, [name]: value }));
  }
 async function handleImageChange(e){
    const file= e.target.files[0];
    const newImage= await uploadImage(file);
    setInput({
        ...input,
        image: [newImage]
    })
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

 async function handleSubmit(e){
    e.preventDefault()
    if(!Object.keys(errors).at(0)){
        
        dispatch(postProduct(input)).then((response)=> {
            alert('Producto creado')}).catch(err=>{return(console.log(err) ,alert(err))})        
    }else alert('Complete todos los campos requeridos por favor')

}

  return (
    <div className="p-4 shadow-lg text-gray-700 bg-gray-200 max-w-fit m-auto min-h-fit dark:text-gray-100 dark:bg-gray-900 ">
       <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Editar producto</h2>
      <form className="flex flex-col "onSubmit={(e)=> handleSubmit(e) }>
        <div className="flex flex-col">
          <label className="mb-2 font-bold ">Nombre: </label>
          <input className="border border-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
            required
          />
          {errors.name ? <p className="text-red-600">{errors.name}</p> : ""}
        </div>
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold ">Precio: </label>
          <input className="border border-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
           type="number"
           min="0"
            value={input.price}
            name="price"
            onChange={(e) => handleChange(e)}
            required
          />
          {errors.price ? <p className="text-red-600">{errors.price}</p> : ""}
        </div>
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold ">Stock: </label>
          <input className="border border-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
           type="number"
           min="0"
            value={input.stock}
            name="stock"
            onChange={(e) => handleChange(e)}
            required
          />
          {errors.stock ? <p className="text-red-600">{errors.stock}</p> : ""}
        </div>
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold " >Detalle del Producto: </label>
          <textarea className="border border-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
           type="text"
            value={input.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
            required
          />
          {errors.summary ? <p className="text-red-600">{errors.summary}</p> : ""}
        </div>
        <div className="columns-2 flex justify-center mb-5">
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold ">Imagen del Producto</label>
          {input.image.URL&&<img className="border border-gray-400 bg-white relative h-40 w-40 object-cover" src={input.image.URL} alt='productImage'/>}
          
          <input className="sr-only my-5 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="file"
            accept="image/*"
           // value={input.image.file}
            name="image"
            id="fileInput"
            onChange={(e) => handleImageChange(e)}
            required
          /><label
          htmlFor="fileInput"
          className="inline-flex relative left-[34%] mt-2 -mb-3 h-14 w-14 items-center justify-center px-4 py-2 bg-teal-400 rounded-full font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera-plus" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="13" r="3" />
  <path d="M5 7h2a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
  <line x1="15" y1="6" x2="21" y2="6" />
  <line x1="18" y1="3" x2="18" y2="9" />
</svg>
        </label>
          {errors.image ? <p className="text-red-600">{errors.image}</p> : ""}
        </div>
        <div>
          <select value={input.categoryId} onChange={(e)=>setInput({...input, categoryId: e.target.value})}>
            <option value="" >Selecione una categoria</option>
            {categories?.map(category=>
              <option value={category.id} >{category.name}</option>)}
          </select>
        </div>
        {errors.categoryId ? <p className="text-red-600">{errors.categoryId}</p> : ""}
        <div className="flex flex-col">
          <label>Descuento? : <input type="checkbox" checked={input.discount.active} name="discount.active" onChange={(e)=>setInput({...input, discount:{active:!input.discount.active, value:input.discount.value}})}></input></label>
          <label>Porcentaje a descontar: <input className="w-12" type="number" value={input.discount.value} onChange={(e)=>setInput({...input, discount:{active:input.discount.active, value:e.target.value}})}></input> </label>
        </div>
        </div>
        <div className="">
        <button type="submit" className="ml-2 px-4 py-2  font-medium  bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600">Enviar</button>
        </div>
      </form>
      
    </div>
  );
}
