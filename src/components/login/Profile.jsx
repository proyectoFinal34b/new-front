import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { getUsersById } from "../../redux/actions";
import { Link } from 'react-router-dom';



function Profile() {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      lastName: "",
      email: "",
      address: "",
      phoneNumber: "",
      image: "",
    });
  
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo) {
          dispatch(getUsersById(userInfo.id));
          setUser(userInfo);
        }
      }, [dispatch]);
      
  
    useEffect(() => {
      if (user) {
        setFormData({
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          address: user.address,
          phoneNumber: user.phoneNumber,
          image: user.image,
        });
      }
    }, [user]);
  
    const handleEdit = () => {
      setEditing(true);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const { name, lastName, email, address, phoneNumber, image } = formData;
        try {
          const response = await axios.put(`https://proyectofinal-gg57.onrender.com/user/${userInfo.id}`, {
            name,
            lastName,
            email,
            address,
            phoneNumber,
            image,
          });
          if (response.status === 200) {
            alert("Cambios guardados exitosamente");
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
      
      

    const handleCancel = () => {
        setEditing(false);
        setFormData({
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          address: user.address,
          phoneNumber: user.phoneNumber,
          image: user.image,
        });
      };
  
    if (!user) {
      return <p>Cargando...</p>;
    }
  return (
    <div className="bg-gray-100 py-8">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-bold mb-4 text-teal-400">Mi perfil</h1>
  
      <div className="flex justify-center items-center">
        <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-bleu.png"  alt="" className="rounded-full w-64 h-64 object-cover object-center border-4 border-teal-400"/>
      </div>
  
      <div className="my-8">
        <p className="text-lg mb-2 font-bold">Nombre: {user.name}</p>
        <p className="text-lg mb-2 font-bold">Apellido: {user.lastName}</p>
        <p className="text-lg mb-2 font-bold">Email: {user.email}</p>
        <p className="text-lg mb-2 font-bold">Dirección: {user.address ? user.address : 'No especificada'}</p>
        <p className="text-lg mb-2 font-bold">Telefono: {user.phoneNumber}</p>
      </div>
    </div>

  


      {editing ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2"  htmlFor="name">
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
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
            Apellido:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Dirección:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
        Imagen:
        </label>
        <input
        type="text"
        onChange={(e) => {
            const value = e.target.value;
            setFormData({ ...formData, image: value });
        }}
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
      ) : (
        <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded">Editar perfil</button>
      
      )}
      <p className="text-center mb-8">
          <Link to='/' className="text-sm text-gray-500 hover:text-teal-400">
            Volver a la página de inicio
          </Link>
        </p>
    </div>
  );
}

export default Profile;