import React, { useState } from 'react';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import WithEventData from '../WithEventData/WithEventData';

function UpComingEvent(props) {
  // const [dataCol, setDataCol] = useState(['Event Name', 'Start Date', 'End Date']);
  const dataCol = ['Event Name', 'Start Date', 'End Date'];

  const renderHeader = () => {
    return <h5>UpComingEvent</h5>;
  };
  return (
    <EventTable renderHeader={renderHeader} dataCol={dataCol}>
      {props.events
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
  )
}

// HOC HELLO
// const UpComingEventPage =withScanData(withError(withUser(withEventData(UpComingEvent))));
// const UpComingEventPage = withEventData(UpComingEvent);

const UpComingEventPage = () => (
  <WithEventData
    renderChildren={(events) => {
      return <UpComingEvent events={events} />;
    }}
  ></WithEventData>
);

export default UpComingEventPage;
