import React from 'react';

import Header from './components/Header';
import EventApp from './components/EventApp/EventApp';
import UpComingEvents from './components/UpComingEvents';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = { showEventList: false, UpComingEvents: false };
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
          <EventApp /> : null
        }
        {this.state.UpComingEvents ?
          <UpComingEvents /> : null
        }
      </div>
    );
  }
}

export default App;
