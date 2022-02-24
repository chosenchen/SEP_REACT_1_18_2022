import React, { useState, useEffect } from "react";
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from "../services/event.api";
import { EventData } from "../models/EventData";

import { useDispatch } from 'react-redux'
import {loadEventCount, incrementEvent, decrementEvent} from '.././components/EventCounter/eventCounterSlice.js';

export const useEventData = () => {
  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();

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
  const handleUpdateEvent = (updateEvent) => {
    return editEvent(updateEvent).then((data) => {
      setEvents(
        events.map((event) => {
          if (event.id === data.id) {
            return {
              ...event,
              ...data,
            };
          } else {
            return event;
          }
        })
      );
    });
  };

  // API CALL
  const handleDeleteEvent = (deletedEvent) => {
    return deleteEvent(deletedEvent).then((data) => {
      setEvents(
        events.filter((event) => {
          if (event.id === deletedEvent.id) {
            return false;
          } else {
            return true;
          }
        })
      );
      dispatch(decrementEvent())
    });
  };

  // API CALL
  const handleAddEvent = (addEvent) => {
    return addNewEvent(addEvent).then(
      ({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);
        setEvents([...events, newEvent]);
        dispatch(incrementEvent())
      }
    );
  };

  // UI STATE
  const handleSetEdit = (setEditEvent, isEdit) => {
    setEvents(
      events.map((event) => {
        if (event.id === setEditEvent.id) {
          return { ...event, isEditing: isEdit };
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

  useEffect(() => {
    const { fetchResult, controller } = getAllEvents();

    fetchResult.then((data) => {
      const events = data.map(({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);
        return newEvent;
      });

      setEvents(events);
      dispatch(loadEventCount(events.length))
      
      return () => {
        controller.abort();
      };
    });
    
  }, []);

  

  return [
    events,
    handleUpdateEvent,
    handleDeleteEvent,
    handleAddEvent,
    handleSetEdit,
    handleOnChangeEditEvent,
  ];
};
