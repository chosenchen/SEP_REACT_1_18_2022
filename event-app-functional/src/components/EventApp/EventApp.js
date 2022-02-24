import React, { useState, useEffect } from 'react';
import './EventApp.css';
import { withEventData } from '../../hoc/withEventData';

import { EventData } from '../../models/EventData';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';

const EventApp = ({
  events,
  handleOnChangeEditEvent,
  handleDeleteEvent,
  handleSetEdit,
  handleAddEvent,
  handleUpdateEvent,
}) => {
  const [dataCol, setDataCol] = useState([
    'Event Name',
    'Start Date',
    'End Date',
    'Actions',
  ]);
  const [isShowAddEventRow, setIsShowAddEventRow] = useState(false);
  const [newEvent, setNewEvent] = useState(
    new EventData('', '' + Date.now(), '' + Date.now())
  );

  const hanldeAddEvent = () => {
    setIsShowAddEventRow(true);
  };

  const hanldeOnChange = (newEvent) => {
    setNewEvent(...newEvent);
  };

  const handleCloseAddNew = () => {
    this.setState({
      isShowAddEventRow: false,
      newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
    });
  };

  const hanldeSaveAddNew = () => {
    const { eventName, startDate, endDate } = newEvent;
    const newEvent = new EventData(eventName, startDate, endDate);
    newEvent.parseTimeStamp();
    if (newEvent.isValidForSave()) {
      handleAddEvent(newEvent).then((data) => {
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

  const renderHeader = () => (
    <Button onClick={hanldeAddEvent}>Add Event</Button>
  );

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
    console.log('EVENTAPP componentWillUnmount ');
  }, []);

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
};

const EventManger = withEventData(EventApp);

export default EventManger;
