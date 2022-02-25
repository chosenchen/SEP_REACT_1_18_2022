import { createStore } from 'redux'; 
import eventListReducer from './reducer/eventListReducer'

let store = createStore(eventListReducer)

export default store;