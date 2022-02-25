import React, { useState } from 'react';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import { useEventData } from '../../hooks/useEventData';


const UpComingEvents = (props) => {

  const [dataCol] = useState([
    'Event Name',
    'Start Date',
    'End Date',
  ]);

  const renderHeader = () => {
    return <h5>UpComingEvent</h5>;
  };

  const [events] = useEventData();

  return (
    <EventTable renderHeader={renderHeader} dataCol={dataCol}>
      {events
        ?.filter((event) => {
          if (event.isInTheFuture()) {
            return true;
          } else {
            return false;
          }
        })
        .map((event) => {
          return <EventDataRow key={event.id} event={event}></EventDataRow>;
        })}
    </EventTable>
  );
}

// const UpComingEventPage = () => (
//   <WithEventData
//     renderChildren={(events) => {
//       return <UpComingEvent events={events} />;
//     }}
//   ></WithEventData>
// );

// export default UpComingEventPage;
export default UpComingEvents;