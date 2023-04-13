import { Button, Space, Card, Modal, Layout,Row,Col } from "antd";
import 'antd/dist/reset.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, del, edit } from './pages/sliceone';
import AddEdit from './pages/addEditExpense';
// import Formpage from './pages/form';
import Myform from './pages/myform';
import './App.css';

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


    return (
        <>
            <Modal open={visible} onOk={onCancel} onCancel={onCancel}>
                <div><Myform data={itemData} /></div>
            </Modal>


            <Header>
                <Button type="primary" onClick={() => triggerModal(null)}> Add </Button>
            </Header>

            <Content>
                <Space className='allExpenses' direction="vertical">
                    {
                        expenses.map((ele, idx) => (
                            
                            <Card key={idx} title={ele.expense}>
                                <div className="contentCols">
                                    <div>ID:</div>
                                    <div>{ele.id}</div>
                                </div>

                                <div className="contentCols">
                                    <div>Date: </div>
                                    <div>{ele.date}</div>
                                </div>

                                <div className="contentCols">
                                    <div>Amount:</div>
                                    <div>{ele.amount}</div>
                                </div>

                                <div className="contentCols">
                                    <div>Coment:</div>
                                    <div>{ele.coment}</div>
                                </div>
                                <div className="contentCols">
                                    <Button type='primary' onClick={() => dispatch(del({ id: ele.id }))}> Delete </Button>
                                    <Button type='primary' id={idx} onClick={() => triggerModal(ele)}> Edit </Button>
                                </div>

                            </Card>
                            
                        ))
                    }
                </Space>
            </Content>

        </>
    )
}
export default App;


