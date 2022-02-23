import React, { useEffect, useState } from "react";
import './EventApp.css';
import { withEventData } from '../../hoc/withEventData';

import { EventData } from '../../models/EventData';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';

function EventApp({handleAddEvent, handleUpdateEvent, handleSetEdit, events, handleOnChangeEditEvent, handleDeleteEvent}) {
  const [dataCol] = useState(['Event Name', 'Start Date', 'End Date', 'Actions']);
  const [isShowAddEventRow, setIsShowAddEventRow] = useState(false);
  const [newEvent, setNewEvent] = useState(new EventData('', '' + Date.now(), '' + Date.now()));

  const hanldeAddEvent = () => {
    setIsShowAddEventRow(true);
  };

  const hanldeOnChange = (newEventData) => {
    console.log('incoming data', newEventData);
    setNewEvent(newEventData);
    console.log('hook data', newEvent);
  };

  const handleCloseAddNew = () => {
    setIsShowAddEventRow(false);
    setNewEvent(new EventData('', '' + Date.now(), '' + Date.now()));
  };

  const hanldeSaveAddNew = () => {
    console.log('hook data when saved', newEvent);
    const { eventName, startDate, endDate } = newEvent;
    const newEventData = new EventData(eventName, startDate, endDate);
    newEventData.parseTimeStamp();
    if (newEventData.isValidForSave()) {
      handleAddEvent(newEventData).then((data) => {
        handleCloseAddNew();
      });
    } else {
      alert('inValid');
    }
  };

  const handleEditSave = (editEventObj) => {
    handleUpdateEvent(editEventObj).then((data) => {
      handleSetEdit(editEventObj, false);
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

  useEffect(() => {
    return () => {
      console.log("EVENTAPP componentWillUnmount ");
    };
  }, []);

  useEffect(() => {
    console.log('hook data after render', newEvent)
  }, [newEvent]);

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
