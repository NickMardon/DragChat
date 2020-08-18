//TODO: turned this ugly thing from a class component on antdesign's docs to a functional component.
// Am I just missing the part where I make a state array based on the form's inputs, link the value, and make an onchange?

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import API from "../../utils/api";

const { Option } = Select;

const CreateHall = () => {
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
    // if (signupFormData.name!=="" && signupFormData.email!=="" && signupFormData.password!=="") {
      //TODO: make api call to frontend api here, post in backend to user. make sure user has name, email, password, description.
      API.saveUser(signupFormData).then(res=>{
        console.log("user successfully created")
      });
      setSignupFormData({
        name:"",
      email:"",
      password: "",
      description: ""});
    // }
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
        <PlusOutlined /> Create Hall
      </Button>

      <Drawer
        title="Create a new hall"
        width={"400px"}

        onClose={onClose}
        visible={visible}


        bodyStyle={{ paddingBottom: 80 }}
        placement="left"
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
                name="hall name"
                label="Hall Name"
                rules={[{ required: true, message: "Please enter hall name" }]}
              >
                <Input value={signupFormData.name} name="hall name" onChange={handleSignupFormChange}  />
              </Form.Item>

            </Col>

          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="hall password"
                label="Hall Password"

                rules={[{ required: true, message: "Please input a hallpass" }]}
              >
                <Input.Password 
                value={signupFormData.password}
                name="hall password"
                onChange={handleSignupFormChange}
                placeholder="Please enter a hallpass" />
              </Form.Item>
            </Col>

          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="rooms"
                label="Rooms"
                rules={[{ required: true, message: 'Please choose the number of rooms' }]}
              >
                <Select placeholder="Please choose the number of rooms">
                  <Option value="one">1</Option>
                  <Option value="two">2</Option>
                  <Option value="three">3</Option>
                  <Option value="four">4</Option>
                  <Option value="five">5</Option>
                  <Option value="six">6</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default CreateHall;