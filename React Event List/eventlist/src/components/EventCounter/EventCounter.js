import React from 'react';
import withEventData from '../HOC/withEventData';

class EventCounter extends React.Component{
    render(){
        return(
            <p>Counter: {this.props.eventList.length}</p>
        )
    }
}

const EventCounterWithSubscription = withEventData(EventCounter);

export default EventCounterWithSubscription;