import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Start from './components/Start';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios'
import Login from "./components/login/LogIn";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Start/>} />
      <Route path='/home'element={<Home/>}> </Route>
        <Route path ="/login" element={<Login/>}></Route>
    

     </Routes>
    </div>

  );
}

export default App;
