// import { Button, DatePicker, Space, version } from "antd";
// import 'antd/dist/reset.css';
// // import type { DatePickerProps } from 'antd';
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { add, del, edit } from './sliceone';


// function AddEdit({item}) {
//     // console.log(item);

//     const state = useSelector(state => state.expense);

//     const dispatch = useDispatch();
//     const [vals, setVals] = useState({
//         expense: item.expense,
//         date: item.date,
//         amount: item.amount,
//         coment: item.coment
//     })
//     const onInput = (eve) => {
//         console.log(eve.target.value);
//         setVals({
//             ...vals, [eve.target.id]: eve.target.value
//         })
//     }
//     const dateChange = (date, dateInString) => {
//         setVals({
//             ...vals, ["date"]: dateInString
//         })
//     };

//     const submitExpense = (eve) => {
//         if (item.id === "" || item.id === undefined) {
//             let addVal = {...vals}
//             addVal.id = state[state.length - 1].id + 1;
//             console.log(addVal);
//             dispatch(add({addVal}));
//         } else {
//             dispatch(edit({ id: item.id, data: vals }));
//         }
//     }

//     const { expense, date, amount, coment } = vals;
//     return (
//         <>
//         <div>{`${item.id}`}</div>
//             {
//                 <div>
//                     <input type="text" placeholder="Expense" defaultValue={expense} id="expense" onChange={onInput} />
//                     <input type="date" id="date" onChange={onInput} />

//                     <input type="number" placeholder="Amount" defaultValue={amount} id="amount" onChange={onInput} />
//                     <input type="text" placeholder="Comment" defaultValue={coment} id="coment" onChange={onInput} />
//                     <input type="button" onClick={submitExpense} value="Submit" />
//                 </div>
//             }
//         </>
//     )
// }
// export default AddEdit;