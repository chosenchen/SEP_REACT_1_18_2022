import React from 'react';
import EventApp from './components/EventApp/EventApp';
import UpComingEvent from './components/UpComingEvents/UpComingEvents';
import CounterClass from './components/Counter/Counter';
import CounterFn from './components/Counter/CounterFn';

import './App.css';

import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';

// const PAGESINFO = {
//   EventManager: 'EventManager',
//   UpComingEvent: 'UpComingEvent',
//   CounterClass: 'CounterClass',
//   CounterFn: 'CounterFn',
// };
class App extends React.Component {
  // state = {
  //   currentPage: PAGESINFO.EventManager,
  //   pagesInfo: PAGESINFO,
  // };

  // hanldePageChange = (newPageInfo) => {
  //   this.setState({
  //     currentPage: newPageInfo,
  //   });
  // };

  render() {
  //   const { currentPage, pagesInfo } = this.state;

  //   let curPage = null;
  //   switch (currentPage) {
  //     case PAGESINFO.EventManager:
  //       curPage = <EventApp></EventApp>;
  //       break;
  //     case PAGESINFO.UpComingEvent:
  //       curPage = <UpComingEvent></UpComingEvent>;
  //       break;
  //     case PAGESINFO.CounterClass:
  //       curPage = <CounterClass></CounterClass>;
  //       break;
  //     case PAGESINFO.CounterFn:
  //       curPage = <CounterFn></CounterFn>;
  //       break;
  //     default:
  //   }

    return (
      <div className="App">
        <Header></Header>
        <Switch>
            <Route exact path='/'><EventApp></EventApp></Route>
            <Route exact path='/eventApp'><EventApp></EventApp></Route>
            <Route exact path='/upcoming'><UpComingEvent></UpComingEvent></Route>
            <Route exact path='/counterclass'><CounterClass></CounterClass></Route>
            <Route exact path='/counterfn'><CounterFn></CounterFn></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
