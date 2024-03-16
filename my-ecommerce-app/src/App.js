import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './component/HomePage.js';
import Products from './component/ProductPage.js';
import './App.css';

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Router>
  );
}

export default App;
