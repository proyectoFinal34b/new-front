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
import CreateForm from './components/form/FormularioCreacion';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios'


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Start/>} />
      <Route path='/home'element={<Home/>}> </Route>
      <Route path ="/login" element={<Login/>}></Route>
      <Route path ="/donaciones" element={<DonacionesRender/>}></Route>
      <Route path ="/gatos" element={<GatosRender/>}></Route>
      <Route path ="/productos" element={<ProductosRender/>}></Route>
      <Route path ="/about-me" element={<SobreNosotros/>}></Route>
      <Route path ="/usuario" element={<UsuariosRender/>}></Route>
      {/* <Route path="/post" element={<CreateForm/>} /> */}
     </Routes>
    </div>

  );
}

export default App;
