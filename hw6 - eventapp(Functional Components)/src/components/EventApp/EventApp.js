import React, { useState, useEffect } from 'react';
import './EventApp.css';
import { withEventData } from '../../hoc/withEventData';

import { EventData } from '../../models/EventData';

import EventDataRow from '../EventDataRow/EventDataRow';
import EventTable from '../EventTable/EventTable';
import Button from '../Button/Button';

const EventApp = (props) => {
  const [state, setState] = useState({
    dataCol: ['Event Name', 'Start Date', 'End Date', 'Actions'],
    isShowAddEventRow: false,
    newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
  });

  const hanldeAddEvent = () => {
    setState({
      isShowAddEventRow: true,
    });
  };

  const hanldeOnChange = (newEvent) => {
    setState({
      newEvent: {
        ...newEvent,
      },
    });
  };

  const handleCloseAddNew = () => {
    setState({
      isShowAddEventRow: false,
      newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
    });
  };

  const hanldeSaveAddNew = () => {
    const { eventName, startDate, endDate } = state.newEvent;
    const newEvent = new EventData(eventName, startDate, endDate);
    newEvent.parseTimeStamp();
    if (newEvent.isValidForSave()) {
      props.handleAddEvent(newEvent).then((data) => {
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

  const renderHeader = () => <Button onClick={hanldeAddEvent}>Add Event</Button>;
  const renderFooter = () => {
    if (state.isShowAddEventRow) {
      return (
        <EventDataRow
          event={state.newEvent}
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
      console.log('EVENTAPP componentWillUnmount ');
    };   
  }, []);
  
  const {
    events,
    handleOnChangeEditEvent,
    handleDeleteEvent,
    handleSetEdit,
  } = props;

  return (
    <EventTable
      dataCol={state.dataCol}
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


