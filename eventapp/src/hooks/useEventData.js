import { useEffect, useState } from "react";

import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from "../services/event.api";

import store from "../store/appStore";

import { EventData } from "../models/EventData";
import { useAbort } from "./useAbort";
import { string } from "prop-types";

export const useEventData = () => {
  const { createSignal } = useAbort();
  // const [events, setEvents] = useState([]);

  const { events } = store.getState();

  useEffect(() => {
    fetchAllEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper
  const generateEditEventstate = (event) => {
    event.isEditing = false;
    event.editEvent = new EventData(
      event.eventName,
      event.startDate,
      event.endDate,
      event.id
    );
  };

  // API CALL
  const fetchAllEvents = () => {
    getAllEvents(createSignal())
      .then((data) => {
        const events = data.map(({ eventName, startDate, endDate, id }) => {
          const newEvent = new EventData(eventName, startDate, endDate, id);
          generateEditEventstate(newEvent);
          return newEvent;
        });

        // setEvents(events);
        store.dispatch({ type: "event/get", payload: events });
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  // API CALL
  const handleUpdateEvent = (updateEvent) => {
    return editEvent(updateEvent, createSignal())
      .then((data) => {
        store.dispatch({ type: "event/update", payload: data });

        // setEvents(
        //   events.map((event) => {
        //   if (event.id === data.id) {
        //     console.log(events);
        //     return { ...event, ...data };
        //   } else {
        //     return event;
        //   }
        // }));
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  // API CALL
  const handleDeleteEvent = (deletedEvent) => {
    return deleteEvent(deletedEvent, createSignal())
      .then((data) => {
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
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  // API CALL
  const handleAddEvent = (addEvent) => {
    return addNewEvent(addEvent, createSignal())
      .then(({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);

        store.dispatch({ type: "event/add", payload: newEvent });
        // setEvents([...events, newEvent]);
      })
      .catch((err) => {
        console.warn(err);
      });
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
    //       return { ...setEditEvent, isEditing: isEdit };
    //     } else {
    //       return event;
    //     }
    //   })
    // );
  };

  // UI STATE
  const handleOnChangeEditEvent = (editEvent) => {
    store.dispatch({ type: "event/onChangeEditEvent", payload: editEvent });
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
  return {
    events,
    handleOnChangeEditEvent,
    handleDeleteEvent,
    handleSetEdit,
    handleAddEvent,
    handleUpdateEvent,
  };
};

store.subscribe(useEventData);
