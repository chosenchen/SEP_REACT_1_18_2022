import React from 'react';
import { withEventData } from '../HOC/withEventData';

class EventCounter extends React.Component{
  render(){
    return (
      <h1 className='counter'>Counter: {this.props.eventList.length}</h1>
    )
  }
}

const EventCounterHeader = withEventData(EventCounter);

export default EventCounterHeader;