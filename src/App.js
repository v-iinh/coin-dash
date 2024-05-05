import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Learn from './Pages/Learn';
import Crypto from './Pages/Crypto';
import NFT from './Pages/NFT';
import Search from './Pages/Search';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/Search" element={<Search/>} />
          <Route path="/NFT" element={<NFT/>} />
          <Route path="/Crypto" element={<Crypto/>} />
          <Route path="/Learn" element={<Learn/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  );
}

export default App;
