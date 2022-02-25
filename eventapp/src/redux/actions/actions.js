function getEventListAction(eventsArr) {
    return {
        type: "getAllEvents",
        payload: eventsArr,
    };
}

function updateEventAction(updateEvent) {
    return {
        type: "updateEvents",
        payload: updateEvent,
    };
}

function deleteEventAction(deletedEvent) {
    return {
        type: "deleteEvent",
        payload: deletedEvent,
    };
}

function addNewEventAction(newEvent) {
    return {
        type: "addNewEvent",
        payload: newEvent,
    };
}

function setEditAction(setEditEvent, isEdit) {
    return {
        type: "setEdit",
        payload: { setEditEvent, isEdit },
    };
}

function onChangeEditEventAction(editEvent) {
    return {
        type: "onChangeEditEvent",
        payload: editEvent,
    };
}

const actions = {
    getEventListAction,
    updateEventAction,
    deleteEventAction,
    addNewEventAction,
    setEditAction,
    onChangeEditEventAction
}

export default actions