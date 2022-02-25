import React from 'react';
import { withEventData } from '../../hoc/withEventData';
import { useEventData } from '../../hooks/useEventData';

import store from '../../redux/store';

function EventCounter () {

  const events = store.getState()
  console.log(events)
    return <h1>{events.length}</h1>;
  }


const EventCounterConnector = withEventData(EventCounter);

export default EventCounterConnector;
