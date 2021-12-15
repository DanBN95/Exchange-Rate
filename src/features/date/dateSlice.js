import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
    name: 'date',
    initialState: {
        today: '',
        lastWeek: '',
    },
    reducers: {
        setTime: (state, action) => {
            state.today = action.payload.today;
            state.lastWeek = action.payload.lastWeek;
        }
    }
})

export const { setTime } = dateSlice.actions;

export const selectDate = state => state.date;

export default dateSlice.reducer;