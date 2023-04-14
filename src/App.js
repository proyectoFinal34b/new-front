import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Start from './components/Start';
import Login from "./components/login/LogIn";
import DonacionesRender from './components/donaciones/donaciones';
import GatosRender from './components/gatos/gatos';
import ProductosRender from './components/productos/productos';
import SobreNosotros from './components/sobre-nosotros/sobre-nosotros';
import UsuariosRender from './components/usuarios/usuarios';
import DetailCat from './components/card/detail';
import CreateForm from './components/form/FormularioCreacion';
import Registro from './components/login/Registro';
import PasarelaDePagos from './components/stripe/stripe';
import Contraseña from './components/login/Contraseña';
import Cambio from './components/login/Cambio'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios'
import Dashboard from './components/dashboardAdmin/dashboard';
import { getUsers } from './redux/actions';
import { getCats } from './redux/actions';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUsers)
    dispatch(getCats)
  },[])
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Start/>} />
      <Route path='/home'element={<Home/>}> </Route>
      <Route path ="/login/" element={<Login/>}></Route>
      <Route path ="/login/registro" element={<Registro/>}></Route>
      <Route path = "/resetpassword" element={<Contraseña/>}></Route>
      <Route path = "/changepassword" element={<Cambio/>}></Route>
      <Route path ="/donaciones" element={<DonacionesRender/>}></Route>
      <Route path ="/gatos" element={<GatosRender/>}></Route>
      <Route path ="/detail" element={<DetailCat/>}></Route>
      <Route path ="/productos" element={<ProductosRender/>}></Route>
      <Route path ="/about-us" element={<SobreNosotros/>}></Route>
      <Route path ="/usuario" element={<UsuariosRender/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/pasarela' element={<PasarelaDePagos/>}></Route>
     {/* <Route path="/post" element={<CreateForm/>} /> */}
     </Routes>
    </div>

  );
}

export default App;
