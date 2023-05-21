import React from 'react'
import './App.css';
import Navbar from './component/Navbar';

//Content
import Home from './Contents/Home';

import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
