//TODO: turned this ugly thing from a class component on antdesign's docs to a functional component.
// Am I just missing the part where I make a state array based on the form's inputs, link the value, and make an onchange?

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./style.css";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  // Select,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import API from "../../utils/api";

// const { Option } = Select;

const DrawerForm = () => {
  //These constants are for the drawer feature
  const [visible, setVisible] = useState(false);

  //My final attempt to just bind state the normal way that joe showed us, incomplete at present
  const [signupFormData, setSignupFormData] = useState({
    name:"",
    email:"",
    password: "",
    description: ""

  })

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    handleSignupSubmit();
  };

  const handleSignupSubmit = () =>{
    if (signupFormData.name!=="" && signupFormData.email!=="" && signupFormData.password!=="") {
      API.saveUser(signupFormData).then(res=>{
        console.log("user successfully created")
        setSignupFormData({
        name:"",
        email:"",
        password: "",
        description: ""}).catch(err=>{
          alert('account creation failed')
        });

        //TODO: is it here in the .then I would redirect to the 'user' page if I wanted to log them in on signup? or how to structure that without a huge rework.

      });
    }
  }
 
  const handleSignupFormChange = event => {
    const {name, value} = event.target;
    setSignupFormData({
      ...signupFormData,
      [name]:value
    })
  }

  return (
    <>
      <Button id="create" type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create Account
      </Button>

      <Drawer
        title="Create a new account"
        width={"400px"}

        onClose={onClose}
        visible={visible}


        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right"
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </div>
        }

      >
        <Form 
          layout="vertical" 
          hideRequiredMark
          >
          <Row gutter={16}>
            <Col span={24}>

              <Form.Item
                name="name"
                label="User Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input value={signupFormData.name} name="name" onChange={handleSignupFormChange}  />
              </Form.Item>

            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please input an email" }]}
              >
                <Input 
                value={signupFormData.email} 
                name="email"
                onChange={handleSignupFormChange} 
                placeholder="Please enter an email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Password"

                rules={[{ required: true, message: "Please input a password" }]}
              >
                <Input.Password 
                value={signupFormData.password}
                name="password"
                onChange={handleSignupFormChange}
                placeholder="Please enter a password" />
              </Form.Item>
            </Col>

          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="description" label="Description">
                <Input.TextArea
                  rows={4}
                  name="description"
                  onChange={handleSignupFormChange}
                  value={signupFormData.description}
                  placeholder="Enter a brief bio or description if you want to!"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm;