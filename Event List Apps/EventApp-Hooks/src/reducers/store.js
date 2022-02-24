import { configureStore } from '@reduxjs/toolkit'
import eventReducer from "../reducers/eventSlice";

export default configureStore({
  reducer: {
      event:eventReducer
  }
})