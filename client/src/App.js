import 'antd/dist/reset.css';
import { Button, DatePicker } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, del, edit } from './pages/sliceone';
import AddEdit from './pages/addEditExpense';


function App() {
    const expenses = useSelector((state) => state.expense);
    const dispatch = useDispatch();
    const [expenseVals, setExpenseVals] = useState({
        expense: "",
        date: "",
        amount: "",
        coment: ""
    });
    const [editId, setEditId] = useState(null);

    const [shouldOpenModal, setShouldOpenModal] = useState(false);
    const onDataChange = (data) => {
        setExpenseVals(data);
    }


    const triggerModal = (e) => {
        if (e.target.name == -1) {
            setShouldOpenModal(!shouldOpenModal);
        } else {
            setExpenseVals(expenses[e.target.name * 1]);
            setEditId(expenses[e.target.name].id);
            setShouldOpenModal(prevVal => prevVal = !prevVal);
        }
    }
    return (
        <>
            <div>
                <input type="button" name={-1} onClick={triggerModal} value="Add" />
                {
                    shouldOpenModal &&
                    <div>
                        <AddEdit data={expenseVals} onDataChange={onDataChange} />
                        <input type="button" onClick={() => dispatch(add(expenseVals))} value="Submit Add" />
                        <input type="button" onClick={() => dispatch(edit({ id: editId * 1, eExpense: expenseVals }))} value="Submit Edit" />
                    </div>
                }
            </div>
            <div className='allExpenses'>
                {
                    expenses.map((ele, idx) => (
                        <div key={idx}>
                            <div>{ele.id}</div>
                            <div>{ele.expense}</div>
                            <div>{ele.date}</div>
                            <div>{ele.amount}</div>
                            <div>{ele.coment}</div>
                            <input type='button' name={idx} onClick={(e) => dispatch(del({ id: e.target.name * 1 + 1 }))} value="Delete" />
                            <input type='button' name={idx} onClick={triggerModal} value="Edit" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default App;


