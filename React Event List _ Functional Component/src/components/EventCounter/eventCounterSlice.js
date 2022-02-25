import { createSlice } from "@reduxjs/toolkit";

const eventCounterSlice = createSlice({
  name: "eventCounter",
  initialState: 0,
  reducers: {
    loadEventCount: (state, action) => {
      return action.payload;
    },
    incrementEvent: (state) => {
      return state + 1;
    },
    decrementEvent: (state) => {
      return state - 1;
    },
  },
});

export const { loadEventCount, incrementEvent, decrementEvent } =
  eventCounterSlice.actions;

export default eventCounterSlice.reducer;
