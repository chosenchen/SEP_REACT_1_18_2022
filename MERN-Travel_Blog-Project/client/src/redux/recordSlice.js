import { createSlice } from '@reduxjs/toolkit'

export const recordSlice = createSlice({
    name: 'records',
    initialState: {
        value: [],
    },
    reducers: {
        setRecords: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setRecords } = recordSlice.actions;
export default recordSlice.reducer;