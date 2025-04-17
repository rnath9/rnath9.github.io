import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace={true} />}/>
      </Routes>
    </Router>
  );
};

export default App;