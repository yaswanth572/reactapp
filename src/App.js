import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Doctor from './Doctor';
import Patient from './Patient';
import Navigate from './Navigate';
import './App.css';


function App(){
  return(
    <div>
    <BrowserRouter>
    <Navigate/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/patient" element={<Patient/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;