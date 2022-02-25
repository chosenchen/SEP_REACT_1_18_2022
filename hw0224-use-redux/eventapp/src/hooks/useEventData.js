import React, { useEffect } from 'react';
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from '../services/event.api';
import { EventData } from '../models/EventData';
import { store } from '../EventRedux/EventRedux';

export const useEventData = () => {
  const [events, setEvents] = React.useState(store.getState());

  console.log('events from redux', events);
  // const [_, forceUpdate] = React.useState(false);

  

  const generateEditEventstate = (event) => {
    event.isEditing = false;
    event.editEvent = new EventData(
      event.eventName,
      event.startDate,
      event.endDate,
      event.id
    );
  };

  useEffect(() => {
    console.log('did mount');

    store.subscribe(() => {
      setEvents(store.getState());
    });

    const { fetchResult, controller } = getAllEvents();
    fetchResult.then((data) => {
      const allEvents = data.map(({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);
        return newEvent;
      });
      store.dispatch({ type: 'setEvents/get', data: allEvents });
      // setEvents(events);
    });
    return () => {
      controller.abort();
    };
  }, []);


  const handleUpdateEvent = (updateEvent) => {
    return editEvent(updateEvent).then((data) => {
      store.dispatch({ type: 'setEvents/edit', data: data });
      // setEvents(
      //   events.map((event) => {
      //     if (event.id === data.id) {
      //       return {
      //         ...event,
      //         ...data,
      //       };
      //     } else {
      //       return event;
      //     }
      //   })
      // );
    });
  };

  const handleDeleteEvent = (deletedEvent) => {
    return deleteEvent(deletedEvent).then((data) => {
      store.dispatch({ type: 'setEvents/delete', data: deleteEvent });
      // setEvents(
      //   events.filter((event) => {
      //     if (event.id === deletedEvent.id) {
      //       return false;
      //     } else {
      //       return true;
      //     }
      //   })
      // );
    });
  };

  // API CALL
  const handleAddEvent = (addEvent) => {
    return addNewEvent(addEvent).then(
      ({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);
        // setEvents([...events, newEvent]);
        store.dispatch({ type: 'setEvents/add', data: newEvent });
      }
    );
  };

  // UI STATE
  const handleSetEdit = (setEditEvent, isEdit) => {
    store.dispatch({ type: 'setEvents/handleSetEdit', data: { editEvent: setEditEvent, isEditing: isEdit } });
    // setEvents(
    //   events.map((event) => {
    //     if (event.id === setEditEvent.id) {
    //       return { ...event, isEditing: isEdit };
    //     } else {
    //       return event;
    //     }
    //   })
    // );
  };


  // UI STATE
  const handleOnChangeEditEvent = (editEvent) => {
    store.dispatch({ type: 'setEvents/handleOnChang', data: editEvent });
    // setEvents(
    //   events.map((event) => {
    //     if (event.id === editEvent.id) {
    //       return {
    //         ...event,
    //         editEvent: { ...editEvent },
    //       };
    //     } else {
    //       return event;
    //     }
    //   })
    // );
  };



  return [
    events,
    handleUpdateEvent,
    handleDeleteEvent,
    handleAddEvent,
    handleSetEdit,
    handleOnChangeEditEvent,
  ];
};
