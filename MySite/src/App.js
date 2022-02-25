import React from 'react';
import NavigationBar from './components/navigationBar/NavigationBar';
import Main from './components/mainBody/Main';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainBody />
      <Footer />       
    </div>
  );
}

export default App;
