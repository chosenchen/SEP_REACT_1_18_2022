import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homePage/Home';
import Projects from './components/homePage/Projects';
import Contact from './components/homePage/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />  
    </div>
  );
}

export default App;

