export const eventDataReducer = (state = { events: [] }, action) => {
  const { events } = state;
  switch (action.type) {
    case "event/get":
      return {
        events: action.payload,
      };
    case "event/update":
      const updateEvent = action.payload;
      const updateEvents = events.map((event) => {
        if (event.id === updateEvent.id) {
          return { ...event, ...updateEvent };
        } else {
          return event;
        }
      });
      return { events: updateEvents };

    case "event/delete":
      const deletedEvent = action.payload;
      const newEvents = events.filter((event) => {
        if (event.id === deletedEvent.id) {
          return false;
        } else {
          return true;
        }
      });
      return { events: newEvents };

    case "event/add":
      return { events: [...events, action.payload] };

    case "event/setEdit":
      const { setEditEvent, isEdit } = action.payload;
      const setEditEvents = events.map((event) => {
        if (event.id === setEditEvent.id) {
          return {
            ...event,
            isEditing: isEdit,
          };
        } else {
          return event;
        }
      });
      return { events: setEditEvents };

    case "event/onChangeEdit":
      const editEvent = action.payload;
      const _newEvents = events.map((event) => {
        if (event.id === editEvent.id) {
          return {
            ...event,
            editEvent: { ...editEvent },
          };
        } else {
          return event;
        }
      });
      return { events: _newEvents };
    default:
      return state;
  }
};
