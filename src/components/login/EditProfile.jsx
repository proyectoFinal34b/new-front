import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUsersById } from "../../redux/actions";

export default function EditProfile({setEditing, user, setUser, formData, setFormData}) {
    const dispatch =useDispatch()


      const handleCancel = () => {
        setEditing(false);
        setFormData({
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          adress: user.adress,
          phoneNumber: user.phoneNumber,
          image: user.image,
        });
      };
    async function handleImageChange (e){
        const file= e.target.files[0];
        const newImage= await uploadImage(file);
        setFormData({
            ...formData,
            image: newImage
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const { name, lastName, email, address, phoneNumber, image } = formData;
        try {
          const response = await axios.put(`/user/${userInfo.id}`, {
            name,
            lastName,
            email,
            address,
            phoneNumber,
            image,
          });
          if (response.status === 200) {
            alert("Cambios guardados exitosamente");
            console.log(formData)
            setEditing(false);
            dispatch(getUsersById(userInfo.id));
            setFormData({
              name: "",
              lastName: "",
              email: "",
              address: "",
              phoneNumber: "",
              image: "",
            });
            setUser(response.data);
          }
        } catch (error) {
          console.error(error);
          alert("Ocurrió un error al guardar los cambios");
        }
      };
      
      

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" w-full sm:w-1/2 lg:w-1/3 m-auto relative bottom-[772px] block p-8 rounded-lg"
      >
        <div className="  items-center ">
          <div className="rounded-full m-auto justify-center items-center  relative bottom-8  w-64 h-64 object-cover object-center border-4 border-teal-400 bg-opacity-5 backdrop-filter backdrop-blur-sm">
        <div className="mb-5   z-50">
          <input
            type="file"
            className="sr-only"
            id="fileInput"
            onChange={(e)=>handleImageChange(e)}
          /></div><label
          htmlFor="fileInput"
          className="inline-flex relative left-[30%] top-[160px] items-center justify-center px-4 py-2 bg-teal-400 rounded-full font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera-plus" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="13" r="3" />
  <path d="M5 7h2a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
  <line x1="15" y1="6" x2="21" y2="6" />
  <line x1="18" y1="3" x2="18" y2="9" />
</svg>
        </label>
        
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre:
          </label>
          <input
            className="shadow appearance-none font-bold border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4 relative bottom-[2px]">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="lastName"
          >
            Apellido:
          </label>
          <input
            className="shadow appearance-none font-bold border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="mb-4 relative bottom-[4px]">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none font-bold border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-4 relative bottom-[7px]">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
            Dirección:
          </label>
          <input
            className="shadow appearance-none font-bold border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <div className="mb-4 relative bottom-[8px]">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Telefono:
          </label>
          <input
            className="shadow appearance-none font-bold border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </div>
        </div>
        <div className="flex justify-between relative bottom-2 ">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar cambios
          </button>
          <button
            className="bg-gray-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}
