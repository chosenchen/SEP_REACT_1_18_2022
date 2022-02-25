import React, { useState, useEffect } from "react";
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from "../services/event.api";
import { EventData } from "../models/EventData";

import { useDispatch } from "react-redux";
import {
  loadEventCount,
  incrementEvent,
  decrementEvent,
} from ".././components/EventCounter/eventCounterSlice.js";

import store from "../Redux/store";
import { getEventListAction, deleteEventAction, updateEventAction, addNewEventAction, setEditAction, onChangeEditEventAction } from ".././Redux/action-creators/eventList.js";





export const useEventData = () => {
  const [events, setEvents] = useState(store.getState().eventList);

  
  store.subscribe(() => {
    setEvents(store.getState().eventList);
  });


  // const dispatch = useDispatch();

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
      
      store.dispatch(updateEventAction(updateEvent))
    
    });
  };

  // API CALL
  const handleDeleteEvent = (deletedEvent) => {
    return deleteEvent(deletedEvent).then((data) => {
     
      store.dispatch(deleteEventAction(deletedEvent))
      
    });
  };

  // API CALL
  const handleAddEvent = (addEvent) => {
    return addNewEvent(addEvent).then(
      ({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);
        store.dispatch(addNewEventAction(newEvent))
        // dispatch(incrementEvent());
      }
    );
  };

  // UI STATE
  const handleSetEdit = (setEditEvent, isEdit) => {

    store.dispatch(setEditAction(setEditEvent, isEdit))

  };

  // UI STATE
  const handleOnChangeEditEvent = (editEvent) => {
    store.dispatch(onChangeEditEventAction(editEvent))
  };

  useEffect(() => {
    const { fetchResult, controller } = getAllEvents();


    fetchResult.then((data) => {
      const returnedEvents = data.map(({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        generateEditEventstate(newEvent);
        return newEvent;
      });

      store.dispatch(getEventListAction(returnedEvents));

      // dispatch(loadEventCount(events.length))
    });

    return () => {
      controller.abort();
    };
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
