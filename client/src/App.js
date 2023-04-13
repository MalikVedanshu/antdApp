import React, { useState } from 'react';
import 'antd/dist/reset.css';
import './App.css';
// import AddEdit from './pages/addEditExpense';
import { useSelector, useDispatch } from 'react-redux';
import Myform from './pages/myform';
import { add, del, edit } from './pages/sliceone';
import { Button, Table, Space, Card, Modal, Layout, Row, Col } from "antd";
const { Column, ColumnGroup } = Table;





// import Formpage from './pages/form';



const { Header, Footer, Sider, Content } = Layout;


function App() {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expence);
    const [itemData, setItemData] = useState(null);
    const [visible, setVisible] = useState(false);
    console.log(expenses);

    const triggerModal = (ele) => {
        setItemData(ele)
        setVisible(prevVal => prevVal = !prevVal);
    }

    const onCancel = () => {
        setVisible(false);
    }
    const data = [...expenses];


    return (
        <>
            <Modal open={visible} onOk={onCancel} onCancel={onCancel}>
                <div key="add"><Myform data={itemData}/></div>
            </Modal>


            <Header>
                <Button type="primary" key="add" onClick={() => triggerModal(null)}> Add </Button>
            </Header>


            <Table dataSource={expenses}> 
                <Column title="ID" dataIndex="id" key="id" />
                <Column title="Expense" dataIndex="expense" key="expense" />
                <Column title="Date" dataIndex="date" key="date" />
                <Column title="Amount" dataIndex="amount" key="amount" />
                <Column title="Coment" dataIndex="coment" key="coment" />
                <Column title="Buttons" key="btns" render={
                    (_, ele) => (
                        <Space key={ele.id}>
                            <Button type='primary' key="del" onClick={() => dispatch(del({ id: ele.id }))}> Delete </Button>
                            <Button type='primary' key="add" onClick={() => triggerModal(ele)}> Edit </Button>
                        </Space>
                    )
                } />
            </Table >
            {/* <Button type='primary' onClick={() => dispatch(del({ id: ele.id }))}> Delete </Button>
                            <Button type='primary' onClick={() => triggerModal(ele)}> Edit </Button> */}
        </>
    )
}
export default App;


