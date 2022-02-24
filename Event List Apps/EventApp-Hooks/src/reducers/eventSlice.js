import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
    name: 'event',
    initialState: {
        value: [],
    },
    reducers: {
        setEvents: (state, action) => {
            state.value = action.payload;
        }
    }
})
export const { setEvents} = eventSlice.actions;
export default eventSlice.reducer;