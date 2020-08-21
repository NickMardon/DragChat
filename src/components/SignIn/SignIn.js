import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  // Select,
} from "antd";

import { useHistory } from "react-router-dom";

import API from "../../utils/api";
import { PlusOutlined } from "@ant-design/icons";




const SignInDrawerForm = (props) => {
  let history = useHistory();

  const [signInVisible, setSignInVisible] = useState(false);

  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  const showSignDrawer = () => {
    setSignInVisible(true);
  };

  const onClose = () => {
    setSignInVisible(false);
    handleSignInSubmit();
  };

  const handleSignInSubmit = () => {
    if (signInFormData.email !== "" && signInFormData.password !== "") {
      API.userLogin(signInFormData)
        .then((res) => {
          console.log("signed in!");
          setSignInFormData({
            email: "",
            password: "",
          });



          //TODO:
          //TODO: TRACED STACK ERROR HERE -> says "props.setCurrentUser is not a function, checked and is being passed from above."
          //TODO:
          // props.setCurrentUser(res.data.user); 
          console.log(props.setCurrentUser)
          // the above log returns undefined.


          //The below line redirects us to the user page upon successful login.
          history.push("/user");
        })
        .catch((err) => {
          console.log(err);
          // alert('sign-in failed')
        });
    }
  };

  const handleSignInFormChange = (event) => {
    const { name, value } = event.target;
    setSignInFormData({
      ...signInFormData,
      [name]: value,
    });
  };

  return (
    <>
      <Button id="tinyColumn" type="primary" onClick={showSignDrawer}>
        <PlusOutlined /> Sign In
      </Button>

      <Drawer
        title="Sign In"
        width={"400px"}
        onClose={onClose}
        visible={signInVisible}
        bodyStyle={{ paddingBottom: 80 }}
        placement="left"
        footer={
          <div
            style={{
              textAlign: "left",
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
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please input an email" }]}
              >
                <Input
                  name="email"
                  value={signInFormData.email}
                  onChange={handleSignInFormChange}
                  placeholder="Please enter an email"
                />
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
                  name="password"
                  value={signInFormData.password}
                  onChange={handleSignInFormChange}
                  placeholder="Please enter a password"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default SignInDrawerForm;
