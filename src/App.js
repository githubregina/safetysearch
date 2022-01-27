import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Search from './components/pages/Search';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/Search" element={<Search />} />
       <Route path="/Contact" element={<Contact />} />
     </Routes>
    </Router>
    </>
  );
}

export default App;
