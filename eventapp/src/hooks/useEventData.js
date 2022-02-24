import { useEffect, useState } from "react";

import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from "../services/event.api";

import { EventData } from "../models/EventData";
import { useAbort } from "./useAbort";

export const useEventData = () => {
  const { createSignal } = useAbort();
  const [events, setEvents] = useState([]);

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

        setEvents(events);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  // API CALL
  const handleUpdateEvent = (updateEvent) => {
    return editEvent(updateEvent, createSignal())
      .then((data) => {
        setEvents(
          events.map((event) => {
            if (event.id === data.id) {
              console.log(events);
              return { ...event, ...data };
            } else {
              return event;
            }
          })
        );
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  // API CALL
  const handleDeleteEvent = (deletedEvent) => {
    return deleteEvent(deletedEvent, createSignal())
      .then((data) => {
        setEvents(
          events.filter((event) => {
            if (event.id === deletedEvent.id) {
              return false;
            } else {
              return true;
            }
          })
        );
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
        setEvents([...events, newEvent]);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  // UI STATE
  const handleSetEdit = (setEditEvent, isEdit) => {
    setEvents(
      events.map((event) => {
        if (event.id === setEditEvent.id) {
          return { ...setEditEvent, isEditing: isEdit };
        } else {
          return event;
        }
      })
    );
  };

  // UI STATE
  const handleOnChangeEditEvent = (editEvent) => {
    setEvents(
      events.map((event) => {
        if (event.id === editEvent.id) {
          return {
            ...event,
            editEvent: { ...editEvent },
          };
        } else {
          return event;
        }
      })
    );
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
