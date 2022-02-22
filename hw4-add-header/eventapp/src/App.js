import React, { useState } from 'react';

import Header from './components/Header/Header';

import './App.css';
import EventTable from './components/EventTable/EventTable';
import EventApp from './components/EventApp/EventApp';
import UpComingEvents from './components/ComingEvents/ComingEvents';
import Counter from './components/EventCounter/EventCounter';

function App() {
  const [showComingEvents, setShowComingEvents] = useState(false);

  const handleClick = (showOrNot) => {
    setShowComingEvents(showOrNot);
  }
  return (
    <div className="App">
      <Header handleClick={handleClick}></Header>
      <Counter />
      {showComingEvents ? <UpComingEvents /> : <EventApp />}
      
    </div>
  );
}

export default App;
