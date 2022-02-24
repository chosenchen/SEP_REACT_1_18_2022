import React from 'react';
// import { withEventData } from '../../hoc/withEventData';
import { useEventData } from '../../hooks/useEventData';

const EventCounter = () => { 
    const [events] = useEventData();
    return <h1>{events.length}</h1>;
}

// const EventCounterConnector = withEventData(EventCounter);

// export default EventCounterConnector;

export default EventCounter;
