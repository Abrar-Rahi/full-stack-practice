import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Dashboard = () => {

  let navigate = useNavigate()
  let userInfo = useSelector(state => state.currentUser.value)
console.log(userInfo);
  const items = [
    userInfo.role == "admin" &&
    getItem('USER', 'sub1', <MailOutlined />, [
      getItem('merchant', null, null, [getItem('merchant', '1'),], 'group'),
      getItem('user', null, null, [getItem('user', '3'),], 'group'),
    ]),
    getItem('PRODUCT', 'sub2', <AppstoreOutlined />, [
      getItem('Add Product', '5'),
      getItem('View Product', '6'),
    ]),
    getItem('CATEGORY & SUB CATEGORY', 'sub4', <SettingOutlined />, [
      getItem('Add Category', '9'),
      getItem('Add SubCategory', '/dashboard/subCategory'),
      getItem('View Category', '11'),
      getItem('View SubCategory', '12'),
    ]),
  ];
  const onClick = (e) => {
    navigate(e.key)
  };

  return (
    <div>
      <Row>
        <Col span={5}>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            mode="vertical"
            items={items}
          />
        </Col>
        <Col span={19}>
          <Outlet/>
        </Col>
      </Row>

    </div>
  )
}

export default Dashboard