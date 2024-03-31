import React from 'react'
import { Button, Flex, Form, Input } from 'antd';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const NewPass = () => {

    
    let param = useParams()
    let navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = await axios.post("http://localhost:8000/api/v1/auth/newPass", {
            password : values.newPass,
            token : param.token
        })
        console.log(data);
        navigate("/login")
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
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
      <Form.Item
        label="New Password"
        name="newPass"
        rules={[
          {
            required: true,
            message: 'Please input your new password',
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
  )
}

export default NewPass