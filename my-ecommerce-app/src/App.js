import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './component/HomePage';
import Products from './component/products';
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
