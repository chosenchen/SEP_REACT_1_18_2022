import React from "react";

import withEventData from "../HOC/withEventData";

class EventCounter extends React.Component {
    render() {
        return (
            <h4>Counter: {this.props.eventList.length}</h4>
        )
    }
}


const EventCounterHeader = withEventData(EventCounter);

export default EventCounterHeader;
