import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    {
        id: 1,
        expense: "Breakfast",
        date: "2023-04-10",
        amount: 200,
        coment: "dhaba"
    }
]

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        add: (state, action) => {
            let lastid = state[state.length - 1].id;
            console.log(lastid);
            action.payload.id = lastid + 1;
            state.push(action.payload);
        },
        del: (state, action) => {
            if(state.length > 1) {
                return state.filter(expense => expense.id !== action.payload.id)
            } else {
                return;
            }
            
        },
        edit: (state, action) => {
            return state.map(exp => {
                // let editedExpense = action.payload.expense;
                if(exp.id === action.payload.id) {
                    action.payload.eExpense.id = exp.id;
                    return action.payload.eExpense;
                } else {
                    return exp;
                }
            })
        }
    }
})

export const {add, del, edit} = expenseSlice.actions;
export default expenseSlice.reducer;
