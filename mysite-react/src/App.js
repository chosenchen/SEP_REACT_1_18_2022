import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
