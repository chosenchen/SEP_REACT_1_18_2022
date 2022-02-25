import React from 'react';
import Header from './components/navbar/NavBar.js';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
