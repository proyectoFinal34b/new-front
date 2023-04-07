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
    <div className="p-4 dark:bg-gray-900 rounded-md w-1/4 ">
      <form className="flex flex-col text-red-600 "onSubmit={(e)=> handleSubmit(e) }>
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold text-gray-100">Nombre del Producto</label>
          <input className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
            required
          />
          {errors.name ? <p>{errors.name}</p> : ""}
        </div>
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold text-gray-100">Precio</label>
          <input className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
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
          <label className="mb-2 font-bold text-gray-100">Stock</label>
          <input className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
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
          <label className="mb-2 font-bold text-gray-100" >Detalle del Producto</label>
          <textarea className="border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
           type="text"
            value={input.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
            required
          />
          {errors.summary ? <p>{errors.summary}</p> : ""}
        </div>
        <div className="flex flex-col justify-center ">
          <label className="mb-2 font-bold text-gray-100">Imagen del Producto</label>
          <img className="border-2 border-gray-900 bg-white h-50   focus:outline-none" src={input.image.URL} alt='productImage'/>
          <input className="border-2 border-gray-900 text-white  shadow-lg shadow-white-500/50 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="file"
            accept="image/*"
           // value={input.image.file}
            name="image"
            onChange={(e) => handleImageChange(e)}
            required
          />
          {errors.image ? <p>{errors.image}</p> : ""}
        </div>
        <div className="text-white">
        <button type="submit" className="ml-2 px-4 py-2  font-medium  bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-blue-600">Enviar</button>
        </div>
      </form>
      
    </div>
  );
}
