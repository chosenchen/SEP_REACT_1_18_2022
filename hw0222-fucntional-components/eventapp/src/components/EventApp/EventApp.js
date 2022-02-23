import React, { useState, useEffect } from 'react';

import './EventApp.css';

// import WithEventData from '../WithEventData/WithEventData';

import { withEventData } from '../../hoc/withEventData';
import { EventData } from '../../models/EventData';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';

function EventApp(props) {
  const [ShowAddEventRow, setShowAddEventRow] = useState(false);
  const [newEvent, setNewEvent] = useState(new EventData('', '' + Date.now(), '' + Date.now()));

  const dataCol = ['Event Name', 'Start Date', 'End Date', 'Actions'];

  const handleAddEvent = () => {
    setShowAddEventRow(true);
  };

  const handleOnChange = (newEvent) => {
    console.log('new',newEvent);
    // setNewEvent({ ...newEvent });
    setNewEvent(newEvent);
  };
  // const handleOnChange = ({ target: { name, value } }) => {
  //   setNewEvent({ ...newEvent, [name]:value });
  //   // this.setState({
  //   //   newEvent: {
  //   //     ...this.state.newEvent,
  //   //     [name]: value,
  //   //   },
  //   // });
  // };

  const handleCloseAddNew = () => {
    setShowAddEventRow(false);
    setNewEvent(new EventData('', '' + Date.now(), '' + Date.now()));
  };

  const handleSaveAddNew = (newEvent) => {
    const { eventName, startDate, endDate } = newEvent;
    console.log('start', startDate);
    console.log('end', endDate);
    const newEvt = new EventData(eventName, startDate, endDate);
    newEvt.parseTimeStamp();
   
    if (newEvt.isValidForSave()) {
      props.handleAddEvent(newEvt).then((data) => {
        handleCloseAddNew();
      });
    } else {
      alert('inValid');
    }
  };

  const handleEditSave = (editEventObj) => {
    props.handleUpdateEvent(editEventObj).then((data) => {
      props.handleSetEdit(editEventObj, false);
    });
  };

  const renderHeader = () => <Button onClick={handleAddEvent}>Add Event</Button>;

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

  console.log('render Event App');
  const {
    events,
    handleOnChangeEditEvent,
    handleDeleteEvent,
    handleSetEdit,
  } = props;
    
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


// const EventManger = () => {
//   <WithEventData renderChildren={(events) => {
//     return <EventApp events={events} />;
//   }}></WithEventData>
// };
const EventManger = withEventData(EventApp);

export default EventManger;
