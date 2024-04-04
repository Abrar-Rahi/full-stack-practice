import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AddCategory = () => {

    let userInfo = useSelector(state=>state.currentUser.value)

    

    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            let data = await axios.post("http://localhost:8000/api/v1/product/addCategory" , {
            categoryName : values.categoryName,
            ownerId : userInfo._id
        })
        console.log(data)
    } catch (error) {
        console.log("Catch Error", error)
    } 
        
        
      }

      
   
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
      label="Category Name"
      name="categoryName"
      rules={[
        {
          required: true,
          message: 'Please input your Category Name!',
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
      <Button type="primary" htmlType="submit" >
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddCategory