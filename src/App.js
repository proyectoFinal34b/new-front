import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Start from './components/Start';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios'


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/home'element={<Home/>}>
     </Route>
     </Routes>
    </div>
  );
}

export default App;
