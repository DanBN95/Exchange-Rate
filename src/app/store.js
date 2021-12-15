import { configureStore } from '@reduxjs/toolkit'
import currencySlice from '../features/currency/currencySlice';
import dateReducer from '../features/date/dateSlice';
import currencyApiReducer from '../features/currency-api/currencyApiSlices';

export default configureStore({
    reducer: {
      currency: currencySlice,
      date: dateReducer,
      currencyApi: currencyApiReducer,
    },
})