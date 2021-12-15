import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import fixer from '../../api/fixer';
import { selectDate } from "../date/dateSlice";

export const getExchangeRates = createAsyncThunk(
    'exchangeRates/getExchangeRates',
    async ({date, currency}, {dispatch, getState}) => {
        console.log("using api")
        console.log(dispatch)
        console.log(date)
        console.log(currency)
        return await fixer.get('/historical', {
            params: {
              base_currency: currency.input,    // ****CHANGE***
              date_from: date.lastWeek,
              date_to: date.today
            }
        })
        .then((res) => console.log(res))
    }
)

const exchangeRatesSlice = createSlice({
    name: 'exchangeRates',
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getExchangeRates.fulfilled, (state, action) => {
            state.list = action.payload;
            console.log("state")
            state.status = 'success'
        });
        builder.addCase(getExchangeRates.pending, (state, action) => {
            state.status = 'loading'
            console.log("state")
        });
        builder.addCase(getExchangeRates.rejected, (state, action) => {
            state.status = 'failed'
            console.log("state")
        });
    },
})

export const selectApiList = ( items ) => items

export default exchangeRatesSlice.reducer