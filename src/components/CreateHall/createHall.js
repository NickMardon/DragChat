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
import { useHistory } from "react-router-dom";


//needed for picking how many rooms to make
const { Option } = Select;

const CreateHall = (props) => {
  //for redirecring 
  let history = useHistory();
  
  //These constants are for the drawer feature
  const [hallFormVisible, setHallFormVisible] = useState(false);

  // the piece of state that manages our hall form input and its value.
  const [hallFormData, setHallFormData] = useState({
    name:"",
    password: "",
    description: "",
    hallSize: 1
  })

  const showDrawer = () => {
    setHallFormVisible(true);
  };

  const onHallFormClose = () => {
    if (hallFormData.name!==""&&hallFormData.password!=="") {
      setHallFormVisible(false);
      handleHallFormSubmit();
      history.push("/user")
    } else {
      setHallFormVisible(false);
    }
  };
  
  const handleHallFormSubmit = () =>{
      API.createHall(hallFormData).then(res=>{
        console.log("Created your hall.");
        setHallFormData({
          name:"",
          password: "",
          description: "",
          hallSize: 1})
          //taking the get all halls from above
          props.getHalls();
      }).catch(err=>{
        alert('hall creation failed.')
      });
  }
 
  const handleHallFormChange = event => {
    const {name, value} = event.target;
    setHallFormData({
      ...hallFormData,
      [name]:value
    })
  }

  const handleSelectChange = (value) => {
    setHallFormData({
      ...hallFormData,
      hallSize:parseInt(value)
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

        onClose={onHallFormClose}
        visible={hallFormVisible}

        bodyStyle={{ paddingBottom: 80 }}
        placement="left"
        footer={
          <div
            style={{
              textAlign: "right"
            }}
          >
            <Button onClick={onHallFormClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button className="drawerBtnBlue" onClick={onHallFormClose} type="primary">
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
                label="Hall Name"
                rules={[{ required: true, message: "Please enter hall name" }]}
              >
                <Input value={hallFormData.name} name="name" onChange={handleHallFormChange}  />
              </Form.Item>

            </Col>

          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Hall Password"

                rules={[{ required: true, message: "Please input a hallpass" }]}
              >
                <Input.Password 
                value={hallFormData.password}
                name="password"
                onChange={handleHallFormChange}
                placeholder="Please enter a hallpass" />
              </Form.Item>
            </Col>

          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="hallSize"
                label="Number of Rooms"
                value={hallFormData.hallSize}
                
                rules={[{ required: true, message: 'Please choose the number of rooms' }]}
              >
                <Select
                name="hallSize"
                onChange={handleSelectChange}
                placeholder="Please choose the number of rooms">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>

              <Form.Item
                name="description"
                label="Hall description"
                rules={[{ required: false }]}
              >
                {/* <Input value={hallFormData.name} name="hall name" onChange={handleHallFormChange}  /> */}
                <Input.TextArea
                  rows={4}
                  name="description"
                  onChange={handleHallFormChange}
                  value={hallFormData.description}
                  placeholder="Enter a brief description of your dropIn hall if you want!"
                />
              </Form.Item>

            </Col>

          </Row>

        </Form>
      </Drawer>
    </>
  );
};

export default CreateHall;