let initialState = [];

export default function eventListReducer(state = initialState, action) {

  
  switch (action.type) {
    case "eventList/loadEventList":

    


      return action.payload;
    case "eventList/updateEvent":
      return state.map((event) => {
        if (event.id === action.payload.id) {
          return {
            ...event,
            ...action.payload,
          };
        } else {
          return event;
        }
      });

    case "eventList/deleteEvent":
      return state.filter((event) => {
        if (event.id === action.payload.id) {
          return false;
        } else {
          return true;
        }
      });
    case "eventList/addNewEvent":
      return [...state, action.payload];

    case "eventList/setEdit":

      return state.map((event) => {
        
        if (event.id === action.payload.setEditEvent.id) {
          return { ...event, isEditing: action.payload.isEdit };
        } else {
          return event;
        }
      });

    case "eventList/onChangeEditEvent":
      return state.map((event) => {
        if (event.id === action.payload.id) {
          return {
            ...event,
            editEvent: { ...action.payload },
          };
        } else {
          return event;
        }
      });

    default:
      return state;
  }
}
