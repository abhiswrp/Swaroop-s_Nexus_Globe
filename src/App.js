import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Copyright from './components/Copyright';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Watermark from './components/Watermark';
import './App.css';
const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Copyright/>
        <Footer/>
        <Watermark/>
      </div>
    </Router>
  );
};

export default App;
