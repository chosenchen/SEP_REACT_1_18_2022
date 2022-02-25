import React from "react";
import { useEffect, useState } from "react";
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from "../services/event.api";
import { EventData } from "../models/EventData";
import store from "../store/store";

export const useEventData = () => {
  const [events, setEvents] = useState([]);

  store.subscribe(() => {
    setEvents(store.getState().events);
  });

  const generateEditEventstate = (event) => {
    event.isEditing = false;
    event.editEvent = new EventData(
      event.eventName,
      event.startDate,
      event.endDate,
      event.id
    );
  };

  React.useEffect(() => {
    const { fetchResult, controller } = getAllEvents();
    fetchResult.then((data) => {
      const events = data.map(({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);
        return newEvent;
      });
      //setEvents(events);
      store.dispatch({ type: "event/get", payload: events });
      console.log(events);
    });
    return () => {
      controller.abort();
    };
  }, []);

  const handleUpdateEvent = (updateEvent) => {
    return editEvent(updateEvent).then((data) => {
      store.dispatch({ type: "event/update", payload: updateEvent });
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
      store.dispatch({ type: "event/delete", payload: deletedEvent });
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
        store.dispatch({ type: "event/add", payload: newEvent });
        // setEvents([...events, newEvent]);
      }
    );
  };
  // UI STATE
  const handleSetEdit = (setEditEvent, isEdit) => {
    store.dispatch({
      type: "event/setEdit",
      payload: { setEditEvent, isEdit },
    });
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
    store.dispatch({ type: "event/onChangeEdit", payload: editEvent });
    // setEvents(
    // events.map((event) => {
    //   if (event.id === editEvent.id) {
    //     return {
    //       ...event,
    //       editEvent: { ...editEvent },
    //     };
    //   } else {
    //     return event;
    //   }
    // });
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
