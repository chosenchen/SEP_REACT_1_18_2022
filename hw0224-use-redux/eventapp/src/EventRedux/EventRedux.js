
const { createStore } = require('redux');

let initialState = [];

let filterDeletedEvent = (events, { data }) => {
    return events.filter((event) => {
        if (event.id === data.id) {
            return false;
        } else {
            return true;
        };
    });
};

let updateEditedEvent = (events, { data }) => {
    return events.map((event) => {
        if (event.id === data.id) {
            return {
                ...event,
                ...data,
            };
        } else {
            return event;
        }
    });
}

let handleSetEdit = (events, { data }) =>{
    return events.map((event) => {
        if (event.id === data.editEvent.id) {
            return { ...event, isEditing: data.isEdit };
        } else {
            return event;
        }
    });
}


function eventReducer(state = initialState, action) {
    console.log('data', action.data);
    switch (action.type) {
        case 'setEvents/get':
            // return {events: action.data};
            return action.data ;
        case 'setEvents/add':
            return [...state, action.data];
        case 'setEvents/delete':
            return filterDeletedEvent(state, action);
        case 'setEvents/edit':
            return updateEditedEvent(state, action);
        case 'setEvents/handleOnChange':
            return updateEditedEvent(state, action);
        case 'setEvents/handleSetEdit':
            return handleSetEdit(state, action);
            
        default:
            return state;
    }
}

function myCreateStore(reducerFn) {
    let state = reducerFn(undefined, { type: '___INIT___', data: undefined});
    let subscriberList = [];
    function dispatch(action) {
        state = reducerFn(state, action);
        notify();
    }
    function notify() {
        subscriberList.forEach((subscriberFn) => {
            subscriberFn();
        });
    }
    function subscribe(subscriberFn) {
        subscriberList.push(subscriberFn);
    }
    function getState() {
        return state;
    }
    return {
        dispatch,
        subscribe,
        getState,
    };
}

export let store = myCreateStore(eventReducer);
