import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const myData = async () => await axios.get("/expenses/allexpenses");

export const getExpenses = createAsyncThunk(
    'expense/getExpenses',
    async () => {
        try {
            let myexp = await axios.get("/expenses/allexpenses")
            console.log(myexp.data.data);
            return myexp.data.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
)

const initialState = [
    {
        _id: "",

        expense: "",
        date: "",
        amount: null,
        coment: ""
    }
]

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    extraReducers: (builders) => {
        builders
            // .addCase(getExpenses.pending, console.log('Still Loading'))
            .addCase(getExpenses.fulfilled, (state, action) => {
                state = action.payload;
            })
    },
    reducers: {
        // console.log(state)
        add: (state, action) => {
            state.push(action.payload);
        },
        del: (state, action) => {
            if (state.length > 1) {
                return state.filter(expense => expense._id !== action.payload.id)
            } else {
                return;
            }

        },
        edit: (state, action) => {
            return state.map(exp => {
                // let editedExpense = action.payload.expense;
                if (exp._id === action.payload.id) {
                    return action.payload;
                } else {
                    return exp;
                }
            })
        }
    }
})

export const { add, del, edit } = expenseSlice.actions;
export default expenseSlice.reducer;
