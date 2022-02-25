export function getEventListAction(eventsArr) {
  return {
    type: "eventList/loadEventList",
    payload: eventsArr,
  };
}

export function updateEventAction(updateEvent) {
  return {
    type: "eventList/updateEvent",
    payload: updateEvent,
  };
}

export function deleteEventAction(deletedEvent) {
  return {
    type: "eventList/deleteEvent",
    payload: deletedEvent,
  };
}

export function addNewEventAction(newEvent) {
  return {
    type: "eventList/addNewEvent",
    payload: newEvent,
  };
}

export function setEditAction(setEditEvent, isEdit) {
  return {
    type: "eventList/setEdit",
    payload: { setEditEvent, isEdit },
  };
}

export function onChangeEditEventAction(editEvent) {
  return {
    type: "eventList/onChangeEditEvent",
    payload: editEvent,
  };
}
