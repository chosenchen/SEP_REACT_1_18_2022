import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import EventList from './components/EventList/EventList.js';
import ComingEvents from './components/ComingEvent/ComingEvents.js'


class App extends React.Component {
  
  state = {
    view: 'eventList'
  }

  handleHeaderOnClick = (e) => {
    // e.prevenDefault();
    if (e.target.getAttribute('name') === 'eventList') {
      this.setState({view: 'eventList'})
    } else if (e.target.getAttribute('name') === 'comingEvents') {
      this.setState({view: 'ecomingEvents'})
    }   
  }

  render(){
    return (
        <div className="App">
          <Header handleHeaderOnClick={this.handleHeaderOnClick} />
          {this.state.view === 'eventList' && (
            <EventList />
          )} 
          {this.state.view === 'comingEvents' && (
            <ComingEvents />
          )} 
        </div>        
    );
  }
}

export default App;


