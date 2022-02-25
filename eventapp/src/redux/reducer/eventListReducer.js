import actions from "../actions/actions";

const initState = []

const eventListReducer = (state = initState, action) => {
    switch( action.type ){
        case "getAllEvents" :
            return action.payload;
        
        case "updateEvents":
            return state.map((event) => {
                if (event.id === action.payload.id) {
                    return {
                        ...event,
                        ...action.payload,
                    };
                } else {
                    return event;
                }
            })
            

        case "deleteEvent" :
            return state.filter((event) => {
                if (event.id === action.payload.id) {
                    return false;
                } else {
                    return true;
                }
            })

        case "addNewEvent":
            return [...state, actions.payload]

        case "setEdit":
            return state.map((event) => {
                if (event.id === action.payload.setEditEvent.id) {
                    return { ...event, isEditing: action.payload.isEdit };
                } else {
                    return event;
                }
            })

        case "onChangeEditEvent":
            return state.map((event) => {
                if (event.id === actions.payload.id) {
                    return {
                        ...event,
                        editEvent: { ...actions.payload },
                    };
                } else {
                    return event;
                }
            })
        
        default: return initState
    }

}



export default eventListReducer;