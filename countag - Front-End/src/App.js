import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/Pages/Home';
import Historico from './Pages/Historico';
import Visualizar from './Pages/VisualizarConsulta'

function App() {

  return (
    <div className='app'>
        <BrowserRouter>
        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/historico" element={<Historico/>}/>
            <Route exact path="/visualizar-consulta" element={<Visualizar/>}/>
          </Routes>
        
        </BrowserRouter>
    </div>

  )
}                 

export default App;
