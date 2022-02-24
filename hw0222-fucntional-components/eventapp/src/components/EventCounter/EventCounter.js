import React from 'react';

import { useEventData } from '../../hooks/useEventData';

const EventCounter = (props) => {

  const [events] = useEventData();
  return (
     <h1>Counter: {events.length}</h1>
  )
    
}

export default EventCounter;
