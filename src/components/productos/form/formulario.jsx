import { getProduct, postProduct } from "../../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

//

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Se requiere un nombre";
  }

  if (!input.price) errors.price = "Debe seleccionar una opción";
else if (input.price < 0 )errors.price ="Debe ser igual o superior a 0"
  if (!input.stock) {
    errors.stock = "Este campo es obligatorio";
  }
  else if (input.stock < 0 )errors.stock ="Debe ser igual o superior a 0"

  if (!input.summary) {
    errors.summary = "Este campo es obligatorio";
  }
  if (!input.image.file) {
    errors.image = "Se requiere una imagen";
  }

  return errors;
}

export default function PostProduct() {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    image: { URL: "", file: "" },
    summary: "",
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
  function handleImageChange(e){
    const file= e.target.files[0];
    setInput({
        ...input,
        image: {URL: URL.createObjectURL(file), file}
    })
    setErrors(validate({
        ...input,
        image: {URL: URL.createObjectURL(file), file}
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

 async function handleSubmit(e){
    e.preventDefault()
    if(!Object.keys(errors).at(0)){
        const newImage= await uploadImage(input.image.file);
        dispatch(postProduct({
            ...input,
            image: [newImage]
        })).then((response)=> {
            console.log(response)
            alert('Producto creado')}).catch(err=> alert(err))        
    }else alert('Complete todos los campos requeridos por favor')

}

  return (
    <div className="p-4 shadow-lg text-gray-700 bg-gray-200 max-w-fit m-auto min-h-fit dark:text-gray-100 dark:bg-gray-900 ">
       <h2 className="text-3xl dark:text-teal-400 font-bold mb-3">Añadir nuevo producto</h2>
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
          {errors.name ? <p>{errors.name}</p> : ""}
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
          {errors.price ? <p>{errors.price}</p> : ""}
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
          {errors.stock ? <p>{errors.stock}</p> : ""}
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
          {errors.summary ? <p>{errors.summary}</p> : ""}
        </div>
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold ">Imagen del Producto</label>
          {input.image.URL&&<img className="border border-gray-400 bg-white h-50 " src={input.image.URL} alt='productImage'/>}
          
          <input className=" my-5 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="file"
            accept="image/*"
           // value={input.image.file}
            name="image"
            onChange={(e) => handleImageChange(e)}
            required
          />
          {errors.image ? <p>{errors.image}</p> : ""}
        </div>
        <div className="">
        <button type="submit" className="ml-2 px-4 py-2  font-medium  bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600">Enviar</button>
        </div>
      </form>
      
    </div>
  );
}
