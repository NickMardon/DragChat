//TODO: extract button into parent component, pass down props or execute a context provider if necessary.

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
        <PlusOutlined /> Sign In
      </Button>

      <Drawer
        title="Sign In"
        width={"400px"}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "left"
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
                <Input placeholder="Please enter an email" />
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
                <Input placeholder="Please enter a password" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm;