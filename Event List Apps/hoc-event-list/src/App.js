import React from 'react';

import './App.css'

import Header from './components/header';
import EventList from './components/eventList';
import UpcomingEventsList from './components/upComingEventsList';

class App extends React.Component {

  constructor() {
    super();
    this.state = { showEventList: true, UpComingEvents: false };
    this.onPageChangeEventList = this.onPageChangeEventList.bind(this);
    this.onPageUpComingEvents = this.onPageUpComingEvents.bind(this);
  }

  onPageChangeEventList() {
    this.setState({ showEventList: true });
    this.setState({ UpComingEvents: false });
  }


  onPageUpComingEvents() {
    this.setState({ UpComingEvents: true });
    this.setState({ showEventList: false });
  }

  render() {
    return (
      <div className="App">
        <Header className='Header'
          onPageChangeEventList={this.onPageChangeEventList}
          onPageUpComingEvents={this.onPageUpComingEvents}
        />
        {this.state.showEventList ?
          <EventList /> : null
        }
        {this.state.UpComingEvents ?
          <UpcomingEventsList /> : null
        }
      </div>
    );
  }
}

export default App;