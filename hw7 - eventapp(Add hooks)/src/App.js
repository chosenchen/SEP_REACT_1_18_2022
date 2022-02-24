import React, { useState } from 'react';
import EventApp from './components/EventApp/EventApp';
import UpComingEvent from './components/UpComingEvents/UpComingEvents';
// import CounterClass from './components/Counter/Counter';
// import CounterFn from './components/Counter/CounterFn';

import './App.css';
import Header from './components/Header/Header';

const PAGESINFO = {
  EventManager: 'EventManager',
  UpComingEvent: 'UpComingEvent',
  // CounterClass: 'CounterClass',
  // CounterFn: 'CounterFn',
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGESINFO.EventManager);
  const [pagesInfo, setPageInfo] = useState(PAGESINFO);

  // Handle when switch to difference button to show different page
  const hanldePageChange = (newPageInfo) => {
    setCurrentPage(newPageInfo);
  };

  let curPage = null;
  // Use switch to show different pages
  switch (currentPage) {
    case PAGESINFO.EventManager:   // show event list
      curPage = <EventApp></EventApp>;
      break;
    case PAGESINFO.UpComingEvent:   // show upcoming events
      curPage = <UpComingEvent></UpComingEvent>;
      break;
    // case PAGESINFO.CounterClass:   
    //   curPage = <Counter />;
    //   break;
    // case PAGESINFO.CounterFn:   
    //   curPage = <CounterFn />;
    //   break;
    default:
  }

  return (
    <div className="App">
      <Header
        pagesInfo={pagesInfo}
        hanldePageChange={hanldePageChange}
      ></Header>
      {curPage}
    </div>
  );
}

export default App;
