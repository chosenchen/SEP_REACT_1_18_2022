import React, { useState } from 'react';

import Header from './components/Header/Header';

import './App.css';
import EventTable from './components/EventTable/EventTable';

function App() {
  const [showComingEvents, setShowComingEvents] = useState(false);

  const handleClick = (showOrNot) => {
    setShowComingEvents(showOrNot);
  }
  return (
    <div className="App">
      <Header handleClick={handleClick}></Header>
      <EventTable showComingEvents={showComingEvents }/>
    </div>
  );
}

export default App;
