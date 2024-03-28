import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './component/HomePage.js';
import Products from './component/ProductPage.js';
import LoginPage from './component/LoginPage.js';

import './App.css'

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </Router>
  );
}

export default App;
