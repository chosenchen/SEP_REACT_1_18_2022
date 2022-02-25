import React from 'react';
import {
    getAllEvents,
    addNewEvent,
    deleteEvent,
    editEvent,
} from '../services/event.api';
import { EventData } from '../models/EventData';

import store from '../redux/store';
import actions from '../redux/actions/actions';

export const useEventData = () => {
    const events = store.getState();

    store.subscribe(() => console.log(store.getState()))

    const generateEditEventstate = (event) => {
        event.isEditing = false;
        event.editEvent = new EventData(
            event.eventName,
            event.startDate,
            event.endDate,
            event.id
        );
    };

    const handleUpdateEvent = (updateEvent) => {
        return editEvent(updateEvent).then(() => {
            console.log(updateEvent)
            store.dispatch(actions.updateEventAction(updateEvent))
        });
    };

    const handleDeleteEvent = (deletedEvent) => {
        return deleteEvent(deletedEvent).then(() => {
            store.dispatch(actions.deleteEventAction(deleteEvent))
        });
    };
    // API CALL
    const handleAddEvent = (addEvent) => {
        return addNewEvent(addEvent).then(
            ({ eventName, startDate, endDate, id }) => {
                const newEvent = new EventData(eventName, startDate, endDate, id);
                generateEditEventstate(newEvent);
                store.dispatch(actions.addNewEventAction(newEvent))
            }
        );
    };
    // UI STATE
    const handleSetEdit = (setEditEvent, isEdit) => {
        store.dispatch(actions.setEditAction(setEditEvent, isEdit))
    };

    // UI STATE
    const handleOnChangeEditEvent = (editEvent) => {
        console.log(editEvent)
        store.dispatch(actions.onChangeEditEventAction(editEvent))
    };

    React.useEffect(() => {
        const { fetchResult, controller } = getAllEvents();

        fetchResult.then((data) => {
            const events = data.map(({ eventName, startDate, endDate, id }) => {
                const newEvent = new EventData(eventName, startDate, endDate, id);
                generateEditEventstate(newEvent);
                return newEvent;
            });
            console.log(events)

            store.dispatch(actions.getEventListAction(events));
        });
        return () => {
            controller.abort();
        };
    }, []);

    console.log(events)
    return [
        events,
        handleUpdateEvent,
        handleDeleteEvent,
        handleAddEvent,
        handleSetEdit,
        handleOnChangeEditEvent,
    ];
};