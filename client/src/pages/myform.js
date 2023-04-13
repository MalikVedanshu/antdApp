import React,{useState, useEffect} from 'react';
import { Button, Select, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import {add, del, edit} from './sliceone';

const { Option } = Select;

function Myform(data) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [modalShouldOpen, setModalShouldOpen] = useState(true);

    const onFinish = (val) => {
        if(data.data === null ) {
            dispatch(add(val))
        } else {
            dispatch(edit({id: data.id, data: val}))
        }
    }
    useEffect(() => {
        if(data.data !== null) {
            form.setFieldsValue(data.data)
        }
    },[data])

    return (
        <>
            <Form form = {form} name='expenseDetails' onFinish={onFinish}>
                {/* Expense */}
                <Form.Item name="expense" rules={[{ required: true, message: "Expense is required" }]}>
                    <Input key="exp" placeholder='Expense' />
                </Form.Item>

                {/* Date */}
                <Form.Item name="date" rules={[{ required: true, message: "Date is required" }]}>
                    <Input  key="dtt" type='date' />
                </Form.Item>

                {/* Amount */}
                <Form.Item name="amount" rules={[{ required: true, message: "Amount is required" }]}>
                    <Input key="amnt" placeholder='Amount' />
                </Form.Item>

                {/* Coment */}
                <Form.Item name="coment" rules={[{ required: true, message: "Coment is required" }]}>
                    <Input key="cmnt" placeholder='Coment' />
                </Form.Item>
                <Form.Item>
                    <Button key="btnsub" type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default Myform;