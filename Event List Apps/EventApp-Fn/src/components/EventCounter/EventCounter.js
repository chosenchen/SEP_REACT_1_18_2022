import React from 'react';
import { withEventData } from '../../hoc/withEventData';

function EventCounter(props) {
  const { events } = props;
  return <h1>{events.length}</h1>;
}

const EventCounterHOC =  withEventData(EventCounter);

export default EventCounterHOC;
