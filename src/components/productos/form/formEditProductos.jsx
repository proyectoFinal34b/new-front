import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import validate from "./validations";
import axios from "axios";
import { postProduct } from "../../../redux/actions";

export default function FormularioEditProduct({closeModal}) {
  const dispatch = useDispatch();
  const productId = localStorage.getItem("productId")
  const getUser = JSON.parse(localStorage.getItem("userInfo"))
  const currentUser = getUser
  const idAdmin =currentUser.id
  const [categories, setCategories] = useState([])

  useEffect(()=>{
   async function getProduct (){
    try {
        const product = await axios.get(`/product/${productId}/`)
        .then(response=> response.data)
        console.log(product)
        setInput({
            name:product.name,
            active:product.name,
            summary:product.summary,
            image:product.image,
            stock:product.stock,
            price:product.price,
            discount:{
                value:product.discount.value,
                active:product.discount.active
            },
            categoryId:product.category.id
        })

    } catch (error) {
        console.log(error)
    }
   }
   async function getCategories (){
    try {
      const categories = await axios.get("/category").then(response => response.data)
      setCategories(categories)
    } catch (error) {
      console.log(error)
    }}
  getCategories()
  getProduct()
  },[])

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    image: [],
    summary: "",
    categoryId:0,
    discount:{
      active:false,
      value:0
    },
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
        
        await axios.put(`/product/${productId}/admin/${idAdmin}`,input).then((response)=> {
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
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold ">Imagen del Producto</label>
          {input.image.URL&&<img className="border border-gray-400 bg-white h-50 " src={input.image.URL} alt='productImage'/>}
          
          <input className=" my-5 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="file"
            accept="image/*"
            name="image"
            onChange={(e) => handleImageChange(e)}
          />
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
        <div className="">
        <button type="submit" className="ml-2 px-4 py-2  font-medium  bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600">Enviar</button>
        </div>
      </form>
      
    </div>
  );
}
