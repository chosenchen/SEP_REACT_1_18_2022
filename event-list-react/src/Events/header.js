import React from 'react';

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
        </div>
      </div>
    )
  }
}

export default Header;