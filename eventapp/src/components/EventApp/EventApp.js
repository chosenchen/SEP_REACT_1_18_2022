import React, { useEffect, useState } from 'react';
import './EventApp.css';
import { withEventData } from '../../hoc/withEventData';

import { EventData } from '../../models/EventData';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';

function EventApp(props) {
    const dataCol = ['Event Name', 'Start Date', 'End Date', 'Actions'];
    const [isShowAddEventRow, setIsShowAddEventRow] = useState(false);
    const [newEvent, setNewEvent] = useState(new EventData('', '' + Date.now(), '' + Date.now()))

    const hanldeAddEvent = () => {
      setIsShowAddEventRow(true);
    };

    const hanldeOnChange = (newEvent) => {
      //setNewEvent( {...newEvent});
      setNewEvent({
        eventName: newEvent.eventName,
        startDate: newEvent.startDate,
        endDate: newEvent.endDate
      })
      console.log(newEvent)
    };

  const handleCloseAddNew = () => {
    setIsShowAddEventRow(false);
    setNewEvent(new EventData('', '' + Date.now(), '' + Date.now()))
  };

  const hanldeSaveAddNew = () => {
    const { eventName, startDate, endDate } = newEvent;
    console.log(newEvent)
    const event = new EventData(eventName, startDate, endDate);
    
    event.parseTimeStamp();
    if (event.isValidForSave()) {
      props.handleAddEvent(event).then((data) => {
        handleCloseAddNew();
      });
    } else {
      console.log(newEvent)
      alert('invalid');
    }
  };

  const handleEditSave = (editEventObj) => {
    props.handleUpdateEvent(editEventObj).then((data) => {
      console.log(editEventObj)
      props.handleSetEdit(editEventObj, false);
    });
  };

  const renderHeader = () => <Button onClick={hanldeAddEvent}>Add Event</Button>;
  const renderFooter = () => {
    if (isShowAddEventRow) {
      return (
        <EventDataRow
          event={newEvent}
          actions={[
            {
              actionName: 'Save',
              actionFn: hanldeSaveAddNew,
            },
            {
              actionName: 'Close',
              actionFn: handleCloseAddNew,
            },
          ]}
          handleOnchange={hanldeOnChange}
        ></EventDataRow>
      );
    } else {
      return null;
    }
  };

  useEffect(() => console.log('EVENTAPP componentWillUnmount '));
  
    console.log(newEvent)
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


const EventManger = withEventData(EventApp);

export default EventManger;
