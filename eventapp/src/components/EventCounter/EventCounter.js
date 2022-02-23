import React from 'react';
import { withEventData } from '../../hoc/withEventData';

const EventCounter = ({ events }) => {
  return <h1>{events.length}</h1>;
};

const EventCounterConnector = withEventData(EventCounter);

export default EventCounterConnector;
