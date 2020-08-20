import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Layout } from 'antd/lib';
import { Menu, Button } from 'antd/lib';
import { Link } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
// const { Header, Footer, Content } = Layout;
// const { Header } = Menu;
import "./index.css";
    
export default function NavBar(props){
    return (<div>
  <>
 {/* <Layout className="layout"> */}
    {/* <Header> */}
      {/* <div className="logo" /> */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
        <Link to="/">
          Home
        </Link>
        </Menu.Item>
        <Menu.Item key="2" className="navRight">
        <Link to="hall">
          {/* Halls */}
          <FontAwesomeIcon icon={faVideo} />
        </Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to="user" className="navRight">
          {/* User */}
          <FontAwesomeIcon icon={faUser} />
        </Link>
        </Menu.Item>
      </Menu>
    {/* </Header> */}
    {/* </Layout> */}
</>
</div>)
}