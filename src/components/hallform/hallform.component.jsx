//TODO: extract button into parent component, pass down props or execute a context provider if necessary.

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

// const { Option } = Select;

const DrawerForm = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button id="tinyColumn" type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create Account
      </Button>

      <Drawer
        title="Create a new account"
        width={"100%"}
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
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="User Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please input an email" }]}
              >
                <Input placeholder="Please enter an email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: "Please input a password" }]}
              >
                <Input placeholder="Please enter a password" />
              </Form.Item>
            </Col>

          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="description" label="Description">
                <Input.TextArea
                  rows={4}
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