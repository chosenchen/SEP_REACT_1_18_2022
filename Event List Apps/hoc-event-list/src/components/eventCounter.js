import React from 'react';
import withEventList from '../HOC/withEventList';

class EventCounter extends React.Component{
    render(){
        return(
            <h3>Counter: {this.props.eventList.length}</h3>
        )
    }
}
const EventCounterWithEventList = withEventList(EventCounter);
export default EventCounterWithEventList;