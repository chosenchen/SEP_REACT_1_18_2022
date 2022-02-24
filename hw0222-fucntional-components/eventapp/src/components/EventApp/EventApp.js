import React, { useState } from 'react';

import './EventApp.css';

// import WithEventData from '../WithEventData/WithEventData';
// import { withEventData } from '../../hoc/withEventData';
import { useEventData } from '../../hooks/useEventData';
import { EventData } from '../../models/EventData';
import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';

const EventApp = (props) => {
  const [ShowAddEventRow, setShowAddEventRow] = useState(false);
  const [newEvent, setNewEvent] = useState(new EventData('', '' + Date.now(), '' + Date.now()));

  const dataCol = ['Event Name', 'Start Date', 'End Date', 'Actions'];

  const [
    events,
    handleUpdateEvent,
    handleDeleteEvent,
    handleAddEvent,
    handleSetEdit,
    handleOnChangeEditEvent,
  ] = useEventData();

  const handleAddBtn = () => {
    setShowAddEventRow(true);
  };

  const handleOnChange = (newEvent) => {
    // setNewEvent({ ...newEvent });
    setNewEvent(newEvent);
  };

  const handleCloseAddNew = () => {
    setShowAddEventRow(false);
    setNewEvent(new EventData('', '' + Date.now(), '' + Date.now()));
  };

  const handleSaveAddNew = (newEvent) => {
    const { eventName, startDate, endDate } = newEvent;
    const newEvt = new EventData(eventName, startDate, endDate);
    newEvt.parseTimeStamp();

    if (newEvt.isValidForSave()) {
      handleAddEvent(newEvt).then((data) => {
        handleCloseAddNew();
      });
    } else {
      alert('inValid');
    }
  };

  const handleEditSave = (editEventObj) => {
    const { eventName, startDate, endDate,id} = editEventObj;
    const newEvt = new EventData(eventName, startDate, endDate, id);
    newEvt.parseTimeStamp();
    
    handleUpdateEvent(newEvt).then((data) => {
      handleSetEdit(newEvt, false);
    });
  };

  const renderHeader = () => <Button onClick={handleAddBtn}>Add Event</Button>;

  const renderFooter = () => {
    if (ShowAddEventRow) {
      return (
        <EventDataRow
          event={newEvent}
          actions={[
            {
              actionName: 'Save',
              actionFn: handleSaveAddNew,
            },
            {
              actionName: 'Close',
              actionFn: handleCloseAddNew,
            },
          ]}
          handleOnchange={handleOnChange}
        ></EventDataRow>
      );
    } else {
      return null;
    }
  };

  return (
    <EventTable
      dataCol={dataCol}
      renderFooter={renderFooter}
      renderHeader={renderHeader}
    >
      {events?.map((event) =>
        event.isEditing ? (
          <EventDataRow
            key={event.id}
            event={event.editEvent}
            actions={[
              {
                actionName: 'Save',
                actionFn: handleEditSave,
              },
              {
                actionName: 'Cancel',
                actionFn: () => handleSetEdit(event, false),
              },
            ]}
            handleOnchange={handleOnChangeEditEvent}
            // handleOnchange={handleOnChange}
          ></EventDataRow>
        ) : (
          <EventDataRow
            key={event.id}
            event={event}
            actions={[
              {
                actionName: 'Edit',
                actionFn: () => handleSetEdit(event, true),
              },
              {
                actionName: 'Delete',
                actionFn: handleDeleteEvent,
              },
            ]}
          ></EventDataRow>
        )
      )}
    </EventTable>
  );
}


// const EventManger = () => (
//   <WithEventData renderChildren={(events, handleUpdateEvent,
//     handleDeleteEvent,
//     handleAddEvent,
//     handleSetEdit, handleOnChangeEditEvent) => {
//     return <EventApp events={events}
//       handleUpdateEvent={handleUpdateEvent}
//       handleDeleteEvent={handleDeleteEvent}
//       handleAddEvent={handleAddEvent}
//       handleSetEdit={handleSetEdit}
//       handleOnChangeEditEvent={handleOnChangeEditEvent}
//     />;
//   }}></WithEventData>
// );
// const EventManger = withEventData(EventApp);

export default EventApp;
