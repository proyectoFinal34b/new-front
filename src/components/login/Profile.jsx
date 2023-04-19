import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getUsersById } from "../../redux/actions";
import { Link } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import Loader from "../dashboardAdmin/loading";
import Footer from "../home/footer/footer";
import EditProfile from "./EditProfile";

function Profile({darkMode,handlerDarkMode}) {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      lastName: "",
      email: "",
      adress: "",
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
          adress: user.adress,
          phoneNumber: user.phoneNumber,
          image: user.image,
        });
      }
    }, [user]);
  
    const handleEdit = () => {
      setEditing(true);
    };
  
    if (!user) {
      return <Loader></Loader>;
    }
  return (
    <>
    <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode}></Navbar>
    <div className="bg-gray-200 dark:bg-bgDark py-8  flex flex-col relative ">
    <div className="bg-gray-500 w-full sm:w-1/2  lg:w-1/3 m-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-bold mb-4 text-teal-400">Bienvenido {user.name}</h1>
  
      <div className="flex flex-auto  justify-center">
        {user.image ? (
      <img src={user.image} alt="" className="rounded-full w-64 h-64 object-cover object-center border-4 border-teal-400" />
    ) : (
      <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-bleu.png" alt="" className="rounded-full w-64 h-64 object-cover object-center border-4 border-teal-400" />
    )}
      </div>
  
      <div className="my-8 ">
        <div className="mb-4">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="name">
            Nombre:
          </label>
          <input
            className="font-bold bg-gray-300 pointer-events-none appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={user.name}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 font-bold mb-2"
            htmlFor="lastName"
          >
            Apellido:
          </label>
          <input
            className="font-bold bg-gray-300 appearance-none pointer-events-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastName"
            value={user.lastName}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="font-bold bg-gray-300 pointer-events-none appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={user.email}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 font-bold mb-2"
            htmlFor="address"
          >
            Dirección:
          </label>
          <input
            className="font-bold bg-gray-300 pointer-events-none appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            value={user.address ? user.address : 'No especificada'}
            
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
            Telefono:
          </label>
          <input
            className="font-bold bg-gray-300 pointer-events-none appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            value={user.phoneNumber}
          />
        </div>
      </div>
    </div>
    <div>
      {editing ? (
       <EditProfile setFormData={setFormData} formData={formData} setEditing={setEditing} user={user} setUser={setUser} ></EditProfile>
      ) : (
        <button onClick={handleEdit} className=" bg-teal-500 rounded w-32 text-black font-semibold h-10 flex justify-center items-center relative sm:left-[54.2%] left-[65.2%] bottom-[510px]">Editar perfil</button>
      
      )}</div>
      <p className="text-center mb-8">
          <Link to='/' className="text-sm text-gray-500 hover:text-teal-400">
            Volver a la página de inicio
          </Link>
        </p>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Profile;