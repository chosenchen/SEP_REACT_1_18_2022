import React from 'react';
import EventApp from './components/EventApp/EventApp';
import UpComingEvents from './components/UpComingEvents/UpComingEvents';
import CounterClass from './components/Counter/CounterClass'
import CounterFn from './components/Counter/CounterFn'
import './App.css';

import Header from './components/Header/Header';

const PAGESINFO = {
  EventManager: 'EventManager',
  UpComingEvents: 'UpComingEvents',
  CounterClass: 'CounterClass',
  CounterFn: 'CounterFn'
};
class App extends React.Component {
  state = {
    currentPage: PAGESINFO.EventManager,
    pagesInfo: PAGESINFO,
  };

  hanldePageChange = (newPageInfo) => {
    this.setState({
      currentPage: newPageInfo,
    });
  };

  render() {
    const { currentPage, pagesInfo } = this.state;

    let curPage = null;
    switch (currentPage) {
      case PAGESINFO.EventManager:
        curPage = <EventApp></EventApp>;
        break;
      case PAGESINFO.UpComingEvents:
        curPage = <UpComingEvents></UpComingEvents>;
        break;
      case PAGESINFO.CounterClass:
          curPage = <CounterClass />;
          break;
      case PAGESINFO.CounterFn:
            curPage = <CounterFn />;
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
