import React from "react";
import { Layout } from 'antd';
import { Menu, Button } from 'antd';
import Hall from "./jitsi";
import '../../index.css'
import './jitsi.css'

const { Header, Footer, Content } = Layout;
    
export default function NavBar(){
    return (<div>
  <>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Halls</Menu.Item>
        <Menu.Item key="3">User Page</Menu.Item>
      </Menu>
    </Header>
<Content><Hall /></Content>
    <Footer>Footer</Footer>
    </Layout>,
</>,
</div>)
}