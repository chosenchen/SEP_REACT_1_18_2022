import { configureStore } from '@reduxjs/toolkit';

import eventCounterReducer from '.././components/EventCounter/eventCounterSlice.js';

export default configureStore({
    reducer: {
      eventCounter: eventCounterReducer
    }
  })