import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './sliceone';

export const store = configureStore({
    reducer: {
        expence: expenseReducer
    }
})