import React from 'react';

import EventApp from './components/EventApp/EventApp';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <EventApp />
      {/* <ComingEvent/> */}
    </div>
  );
}

export default App;
