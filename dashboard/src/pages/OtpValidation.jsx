import React from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const OtpValidation =  () => {
    let navigate = useNavigate()
    let param = useParams()

    const onFinish = async (values) => {

        let data = await axios.post("http://localhost:8000/api/v1/auth/otpvalidation", {
            email : param.email,
            otp: values.otp,

        })
        console.log(data);
        navigate("/login")
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h3>An OTP send on your email. please enter here this otp for varification</h3>
                <Form.Item
                    label="Otp"
                    name="otp"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Otp',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default OtpValidation