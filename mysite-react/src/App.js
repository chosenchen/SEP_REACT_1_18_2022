import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navBar/navBar';
import Main from './components/main/main';
import Projects from './components/project/projects';
import Footer from './components/footer/footer';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
