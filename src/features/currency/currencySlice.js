import { createSlice } from "@reduxjs/toolkit";

const exchangeCurrencyMap = new Map([
    ["EUR", "USD"],
    ["USD","GBP"],
]);

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        input: 'EUR',
        output: 'USD'
    },
    reducers: {
        changeBase(state, action) {
            state.input = action.payload;
            state.output = exchangeCurrencyMap.get(action.payload);
        }
    }
})

export const { changeBase } = currencySlice.actions;

export const selectCurrency = ({ currency }) => currency

export default currencySlice.reducer