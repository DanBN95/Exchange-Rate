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
        .then((res) => localStorage.setItem("EXCHANGEDATA", JSON.stringify(res.data.data)))
        // .then((res) => console.log(res.data.data))
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
            console.log(action);
            state.list = JSON.parse(localStorage.getItem("EXCHANGEDATA"));
            state.status = 'success'

        });
        builder.addCase(getExchangeRates.pending, (state, action) => {
            state.status = 'loading'
        });
        builder.addCase(getExchangeRates.rejected, (state, action) => {
            state.status = 'failed'
        });
    },
})

export const selectApiList = ( items ) => items

export default exchangeRatesSlice.reducer