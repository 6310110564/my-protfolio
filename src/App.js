import React from 'react'
import './App.css';
import Navbar from './component/Navbar';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </Router>
  );
}

export default App;
