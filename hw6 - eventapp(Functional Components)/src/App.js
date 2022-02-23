import React from 'react';
import EventApp from './components/EventApp/EventApp';
import UpComingEvent from './components/UpComingEvents/UpComingEvents';
import './App.css';

import Header from './components/Header/Header';

const PAGESINFO = {
  EventManager: 'EventManager',
  UpComingEvent: 'UpComingEvent',
};

class App extends React.Component {
  state = {
    currentPage: PAGESINFO.EventManager,
    pagesInfo: PAGESINFO,
  };

  // Handle when switch to difference button to show different page
  hanldePageChange = (newPageInfo) => {
    this.setState({
      currentPage: newPageInfo,
    });
  };

  render() {
    const { currentPage, pagesInfo } = this.state;

    let curPage = null;
    // Use switch to show different pages
    switch (currentPage) {
      case PAGESINFO.EventManager:   // show event list
        curPage = <EventApp></EventApp>;
        break;
      case PAGESINFO.UpComingEvent:   // show upcoming events
        curPage = <UpComingEvent></UpComingEvent>;
        break;
      default:
    }

    return (
      <div className="App">
        <Header
          pagesInfo={pagesInfo}
          hanldePageChange={this.hanldePageChange}
        ></Header>
        {curPage}
      </div>
    );
  }
}

export default App;
