import React from 'react';
import EventIndex from './Events/event_index';
import EventUpcoming from './Events/event_upcoming_index';
import Header from './Events/header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventIndex: true,
      eventUpcoming: false,
    }
  }

  setCurrentApp = () => {
    this.setState({
      eventIndex : !this.state.eventIndex,
      eventUpcoming : !this.state.eventUpcoming
    });
  }

  render () {
    const {eventIndex, eventUpcoming} = this.state;
    return (
      <div className="App">
        <Header 
        eventIndex={eventIndex}
        eventUpcoming={eventUpcoming}
        setCurrentApp={this.setCurrentApp}
        />
        {eventIndex && <EventIndex eventUpcoming={eventUpcoming}/>}
        {eventUpcoming && <EventUpcoming eventUpcoming={eventUpcoming}/>}
      </div>
    )
  }
}

export default App;
