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
        className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="lastName"
          >
            Apellido:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
            Dirección:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Telefono:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Imagen:
          </label>
          <input
            type="file"
            onChange={(e)=>handleImageChange(e)}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar cambios
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
