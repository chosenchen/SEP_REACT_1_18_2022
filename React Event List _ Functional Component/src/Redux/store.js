// import { configureStore } from '@reduxjs/toolkit';

// import eventCounterReducer from '.././components/EventCounter/eventCounterSlice.js';

// export default configureStore({
//     reducer: {
//       eventCounter: eventCounterReducer
//     }
//   })


import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer.js'

let store = createStore(rootReducer);

export default store;