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

import store from '../../Redux/store';

const EventCounter = (props)=>{

  const [events] = useEventData()

  return <h1>{events.length}</h1>;
}



export default EventCounter;
