import React, { useState, useEffect  } from 'react';
import 'antd/dist/reset.css';
import { useSelector, useDispatch } from 'react-redux';
import Myform from './pages/myform';
import { del, getExpenses } from './pages/sliceone';
import { Button, Table, Space, FloatButton } from "antd";
import axios from 'axios';
const { Column } = Table;


function App() {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expence);
    const [itemData, setItemData] = useState(null);
    const [visible, setVisible] = useState(false);

    const triggerModal = (ele) => {
        setItemData(ele)
        setVisible(true);
    }
    const onDel = async (aId) => {
        console.log(aId);
        await axios.delete(`expenses/deleteexpense/${aId}`)
        dispatch(del({ id: aId }))
        
    }

    const onCancel = () => {
        setItemData(null)
        setVisible(false);
    }
    useEffect(() => {
        dispatch(getExpenses())
    },[])


    return (
        <>
            <Myform data={itemData} open={visible} onOk={onCancel} onCancel={onCancel} />
            <FloatButton onClick={() => triggerModal(null)} shape="square" description="+" />


            <Table dataSource={expenses} rowKey="_id">
                {/* <Column title="ID" dataIndex="_id" /> */}
                <Column title="Expense" dataIndex="expense" />
                <Column title="Date" dataIndex="date" />
                <Column title="Amount" dataIndex="amount" />
                <Column title="Coment" dataIndex="coment" />
                <Column title="Buttons" render={
                    (_, ele) => (
                        <Space key={ele._id}>
                            <Button type='primary' onClick={() => onDel(ele._id)}> Delete </Button>
                            <Button type='primary' onClick={() => triggerModal(ele)}> Edit </Button>
                        </Space>
                    )
                } />
            </Table >
        </>
    )
}
export default App;


