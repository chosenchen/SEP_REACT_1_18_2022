import React from 'react';
// import { withEventData } from '../../hoc/withEventData';
import { useEventData } from '../../hooks/useEventData';


const EventCounter = () => {
  const [events] = useEventData();
  return <h1>{events.length}</h1>;
}


export default EventCounter;
