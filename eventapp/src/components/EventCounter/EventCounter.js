import React from "react";
// import { withEventData } from '../../hoc/withEventData';
import { useEventData } from "../../hooks/useEventData";
const EventCounter = (props) => {
  const { events } = useEventData();
  return <h1>Counter: {events.length}</h1>;
};

//const EventCounterConnector = withEventData(EventCounter);

export default EventCounter;
