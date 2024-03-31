import React from 'react'
import { Button, Flex, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { activeUser } from '../slices/userSlice';


const Login = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()

  const onFinish = async (values) => {
    try {
      let data = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email: values.email,
        password: values.password
      })
      console.log(data);
      if(data.data.email == values.email ){
        if(data.data.role == "user"){
          console.log("You Have not permission to Login");
        }else{

          navigate("/dashboard")
          dispatch(activeUser(data.data))
          localStorage.setItem("user", JSON.stringify(data.data))
        }
      }

    } catch (error) {
      console.log(error);
    }

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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Flex gap="small" wrap="wrap">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Link to={"/forgotPass"}>
            <Button type="link">Forgot Password</Button>
          </Link>
        </Flex>
      </Form.Item>
    </Form>
  )
}

export default Login