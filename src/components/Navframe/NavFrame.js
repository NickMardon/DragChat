import React from "../../../node_modules/react";
import { Layout } from '../../../node_modules/antd/lib';
import { Menu, Button } from '../../../node_modules/antd/lib';

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
    </Layout>,
</>,
</div>)
}