import React from 'react';
import { withEventData } from '../../hoc/withEventData';

import { useSelector } from 'react-redux'

// class EventCounter extends React.Component {
//   render() {
//     const { events } = this.props;
//     return <h1>{events.length}</h1>;
//   }
// }

import { useEventData } from '../../hooks/useEventData';

const EventCounter = (props)=>{

  const eventCounter = useSelector(state=>state.eventCounter)


  const [events] = useEventData()
  return <h1>{eventCounter}</h1>;
}

const EventCounterConnector = withEventData(EventCounter);

export default EventCounterConnector;
