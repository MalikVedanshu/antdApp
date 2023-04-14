import React, { useState,useRef  } from 'react';
import 'antd/dist/reset.css';
import { useSelector, useDispatch } from 'react-redux';
import Myform from './pages/myform';
import { del } from './pages/sliceone';
import { Button, Table, Space, FloatButton } from "antd";
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

    const onCancel = () => {
        setItemData(null)
        setVisible(false);
    }


    return (
        <>
            <Myform data={itemData} open={visible} onOk={onCancel} onCancel={onCancel} />
            <FloatButton onClick={() => triggerModal(null)} shape="square" description="+" />


            <Table dataSource={expenses} rowKey="id">
                <Column title="ID" dataIndex="id" />
                <Column title="Expense" dataIndex="expense" />
                <Column title="Date" dataIndex="date" />
                <Column title="Amount" dataIndex="amount" />
                <Column title="Coment" dataIndex="coment" />
                <Column title="Buttons" render={
                    (_, ele) => (
                        <Space key={ele.id}>
                            <Button type='primary' onClick={() => dispatch(del({ id: ele.id }))}> Delete </Button>
                            <Button type='primary' onClick={() => triggerModal(ele)}> Edit </Button>
                        </Space>
                    )
                } />
            </Table >
        </>
    )
}
export default App;


