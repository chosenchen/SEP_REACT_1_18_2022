import { combineReducers } from 'redux';
import eventListReducer from './eventListReducer';

const reducers = {
    eventList: eventListReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer;

