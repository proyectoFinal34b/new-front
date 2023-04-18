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
    <div className="bg-gray-100 py-8">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-bold mb-4 text-teal-400">Mi perfil</h1>
  
      <div className="flex justify-center items-center">
        {user.image ? (
      <img src={user.image} alt="" className="rounded-full w-64 h-64 object-cover object-center border-4 border-teal-400" />
    ) : (
      <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-bleu.png" alt="" className="rounded-full w-64 h-64 object-cover object-center border-4 border-teal-400" />
    )}
      </div>
  
      <div className="my-8">
        <p className="text-lg mb-2 font-bold">Nombre: {user.name}</p>
        <p className="text-lg mb-2 font-bold">Apellido: {user.lastName}</p>
        <p className="text-lg mb-2 font-bold">Email: {user.email}</p>
        <p className="text-lg mb-2 font-bold">Dirección: {user.adress ? user.adress : 'No especificada'}</p>
        <p className="text-lg mb-2 font-bold">Telefono: {user.phoneNumber}</p>
      </div>
    </div>

  


      {editing ? (
       <EditProfile setFormData={setFormData} formData={formData} setEditing={setEditing} user={user} setUser={setUser} ></EditProfile>
      ) : (
        <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded">Editar perfil</button>
      
      )}
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