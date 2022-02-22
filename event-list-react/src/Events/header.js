import React from 'react';
import EventCounter from './eventCounter';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {setCurrentApp, eventIndex, eventUpcoming} = this.props;
    return (
      <div>
        <div className='header-container'>
          <button className='buttons event-btn' onClick={setCurrentApp} disabled={eventIndex}>Event Manager</button>
          <button className='buttons event-btn' onClick={setCurrentApp} disabled={eventUpcoming}>Upcoming Events</button>
          <EventCounter />
        </div>
      </div>
    )
  }
}

export default Header;