import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Login from "./components/login/LogIn";
import DonacionesRender from './components/donaciones/donaciones';
import GatosRender from './components/gatos/gatos';
import ProductosRender from './components/productos/productos';
import SobreNosotros from './components/sobre-nosotros/sobre-nosotros';
import UsuariosRender from './components/usuarios/usuarios';
import DetailGatos from "./components/detail/render/detailCats"
import DetailProductos from './components/detail/render/detailProducts';
import Registro from './components/login/Registro';
import PasarelaDePagos from './components/stripe/stripe';
import Contraseña from './components/login/Contraseña';
import Cambio from './components/login/Cambio'
import Profile from './components/login/Profile'
import Contacto from './components/login/Contacto'
import FormAdopcion from './components/form/FormAdopcion'
import FormApadrinamiento from './components/form/FormApadrinamiento'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import Dashboard from './components/dashboardAdmin/dashboard';
import { getUsers } from './redux/actions';
import { getCats } from './redux/actions';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import Footer from './components/home/footer/footer';

function App() {
  const dispatch = useDispatch()
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  const handlerDarkMode = (e) => {
    const isDarkMode = e.target.checked;
    setDarkMode(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  useEffect(()=>{
    dispatch(getUsers)
    dispatch(getCats)
  },[])
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  axios.defaults.baseURL = "https://proyectofinal-gg57.onrender.com/"
  return (
    <div className="App cursor-default dark:bg-bgDark bg-slate-200">
      <Routes>
      <Route path='/'element={<Home darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}> </Route>
      <Route path ="/login/" element={<Login darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path ="/login/registro" element={<Registro darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path = "/resetpassword" element={<Contraseña darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path = "/changepassword" element={<Cambio darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path = "/profile" element={<Profile darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path ="/donaciones" element={<DonacionesRender darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path ="/gatos" element={<GatosRender darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path ="/gatos/:id" element={<DetailGatos darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path ="/productos" element={<ProductosRender darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path ="/productos/:id" element={<DetailProductos darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path ="/about-us" element={<SobreNosotros darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path ="/usuario" element={<UsuariosRender darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path='/dashboard' element={<Dashboard darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path='/pasarela' element={<PasarelaDePagos darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>}></Route>
      <Route path="/contacto" element={
        <>
      <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
      <Contacto darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
      <Footer></Footer></>}></Route>
      <Route path="/formadopcion"element={
        <>
        <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
      <FormAdopcion darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
      <Footer></Footer>
      </>}></Route>
      <Route path="/formapadrinamiento" element={
      <>
      <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
      <FormApadrinamiento darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
      <Footer></Footer>
      </>}></Route>
     {/* <Route path="/post" element={<CreateForm/>} /> */}
     </Routes>
    </div>

  );
}

export default App;
