import React from "react";
// import { withEventData } from '../../hoc/withEventData';
import { useEventData } from "../../hooks/useEventData";
const EventCounter = (props) => {
  const { events, ...rest } = useEventData();
  console.log(events);
  return <h1>events</h1>;
};

//const EventCounterConnector = withEventData(EventCounter);

export default EventCounter;
