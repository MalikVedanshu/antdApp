import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    {
        id: 1,
        expense: "Breakfast",
        date: "2023-04-10",
        amount: 200,
        coment: "dhaba"
    },
    {
        id: 2,
        expense: "Lunch",
        date: "2023-04-11",
        amount: 120,
        coment: "Tiffin"
    },
    {
        id: 3,
        expense: "Dinner",
        date: "2023-04-12",
        amount: 80,
        coment: "Self"
    }
]

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        // console.log(state)
        add: (state, action) => {
            let lastId = state[state.length - 1].id + 1;
            action.payload.id = lastId;
            state.push(action.payload);
        },
        del: (state, action) => {
            if (state.length > 1) {
                return state.filter(expense => expense.id !== action.payload.id)
            } else {
                return;
            }

        },
        edit: (state, action) => {
            return state.map(exp => {
                // let editedExpense = action.payload.expense;
                if (exp.id === action.payload.id) {
                    action.payload.data.id = exp.id;
                    return action.payload.data;
                } else {
                    return exp;
                }
            })
        }
    }
})

export const { add, del, edit } = expenseSlice.actions;
export default expenseSlice.reducer;
