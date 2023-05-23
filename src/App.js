import React from 'react'
import './App.css';
import Navbar from './component/Navbar';

//Content
import Home from './Contents/Home';

import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './Contents/About';
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Contact from './Contents/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
