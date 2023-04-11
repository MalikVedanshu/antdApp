import 'antd/dist/reset.css';
import { Button, DatePicker } from 'antd';
import React, { useState, useEffect } from "react";

function AddEdit({ data, onDataChange }) {

    const [vals, setVals] = useState({
        expense: data.expense,
        date: data.date,
        amount: data.amount,
        coment: data.coment
    })
    const onInput = (eve) => {
        setVals({
            ...vals, [eve.target.name]: eve.target.value
        })
    }
    useEffect(() => {
        onDataChange(vals);
    }, [vals]);

    const { expense, date, amount, coment } = vals;
    return (
        <>
            {
                <div>
                    <input type="text" placeholder="Expense" defaultValue={expense} name="expense" onChange={onInput} />
                    <input type='date' name="date" onChange={onInput} />
                    <input type="number" placeholder="Amount" defaultValue={amount} name="amount" onChange={onInput} />
                    <input type="text" placeholder="Comment" defaultValue={coment} name="coment" onChange={onInput} />
                </div>
            }
        </>
    )
}
export default AddEdit;