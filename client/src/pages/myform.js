import React from 'react';
import { Button, Select, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import {add, del, edit} from './sliceone';

const { Option } = Select;

function Myform(data) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();


    const onFinish = (val) => {
        if(data === null ) {
            dispatch(add(val))
        } else {
            dispatch(edit({id: data.id, data: val}))
        }

    }



    return (
        <>
           
            <Form form = {form} name='expenseDetails' onFinish={onFinish}>
                {/* Expense */}
                <Form.Item name="expense" rules={[{ required: true, message: "Expense is required" }]}>
                    <Input placeholder='Expense' defaultValue={data.expense} />
                </Form.Item>

                {/* Date */}
                <Form.Item name="date" rules={[{ required: true, message: "Date is required" }]}>
                    <Input type='date' defaultValue={data.date} />
                </Form.Item>

                {/* Amount */}
                <Form.Item name="amount" rules={[{ required: true, message: "Amount is required" }]}>
                    <Input placeholder='Amount' defaultValue={data.amount} />
                </Form.Item>

                {/* Coment */}
                <Form.Item name="coment" rules={[{ required: true, message: "Coment is required" }]}>
                    <Input placeholder='Coment' defaultValue={data.coment} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default Myform;