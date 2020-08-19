import React from "react";
import { Layout } from 'antd/lib';
import { Menu, Button } from 'antd/lib';
import { Link } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
const { Header, Footer, Content } = Layout;
    
export default function NavBar(props){
    return (<div>
  <>
 <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
        <Link to="/">
          Home
        </Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to="hall">
          Halls
        </Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to="user">
          User
        </Link>
        </Menu.Item>
      </Menu>
    </Header>
    </Layout>
</>
</div>)
}