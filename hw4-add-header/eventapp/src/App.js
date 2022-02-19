import React, { useState } from 'react';

import EventApp from './components/EventApp/EventApp';
import Header from './components/Header/Header';
import ComingEvents from './components/ComingEvents/ComingEvents';

import './App.css';

function App() {
  const [showComingEvents, setShowComingEvents] = useState(false);

  const handleClick = (showOrNot) => {
    setShowComingEvents(showOrNot);
  }
  return (
    <div className="App">
      <Header handleClick={handleClick}></Header>
      {showComingEvents ?
        <ComingEvents isShowAddEventRow={false}/>
        :
        <EventApp />
      }
    </div>
  );
}

export default App;
