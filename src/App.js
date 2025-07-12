import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home'
import Series from '../src/pages/Series/Series';
import Peliculas from '../src/pages/Peliculas/Peliculas';
import MiLista from '../src/pages/MiLista/MiLista';
import Ninos from '../src/pages/Ninos/Ninos';
import Navbar from './components/navbar/Navbar';
import './App.css';


function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/mi-lista" element={<MiLista />} />
        <Route path="/ninos" element={<Ninos />} />
      </Routes>
    </Router>
  );
}

export default App;
