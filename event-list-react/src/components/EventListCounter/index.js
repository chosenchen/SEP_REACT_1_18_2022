import React from "react";
import withEventList from "../HOC/withEventList";

class EventListCounter extends React.Component {
  render() {
    return <>{this.props.eventList.length}</>;
  }
}

const EventListCounterHOC = withEventList(EventListCounter);

export default EventListCounterHOC;
