import React, { useEffect } from 'react';
import { Form, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { add, edit } from './sliceone';
import axios from 'axios';


function Myform({ data, open, onOk, onCancel }) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish = (val) => {
        // console.log(data.onCancel());
        if (data === null) {
            // dispatch(add(val));
            onCancel();
        } else {
            dispatch(edit({ id: data._id, ...val }));
            onCancel();
        }
    }

    useEffect(() => {
        if (data !== null) {
            form.setFieldsValue(data)
        }
    }, [data])
    const nodeRef = React.useRef(null);
    return (
        <>
            <Modal  nodeRef={nodeRef} open={open} onCancel={onCancel} onOk={() => onFinish(form.getFieldsValue())}>
                <Form form={form} name='expenseDetails'>
                    <Form.Item name="expense" rules={[{ required: true, message: "Expense is required" }]}>
                        <Input placeholder='Expense' />
                    </Form.Item>

                    
                    <Form.Item name="date" rules={[{ required: true, message: "Date is required" }]}>
                        <Input type='date' />
                    </Form.Item>

                    
                    <Form.Item name="amount" rules={[{ required: true, message: "Amount is required" }]}>
                        <Input placeholder='Amount' />
                    </Form.Item>

                    
                    <Form.Item name="coment" rules={[{ required: true, message: "Coment is required" }]}>
                        <Input placeholder='Coment' />
                    </Form.Item>
                </Form>
            </Modal>
            </>
    )
}
export default Myform;