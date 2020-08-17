import { Row, Col } from 'antd';
import './hall.css';
import React from 'react';

export default function Grid(){
    return (
  <>
    <Row className= "row">
      <Col span={24}>Placeholders for different rooms</Col>
    </Row>
    <Row className= "row">
      <Col span={12}>Room 1</Col>
      <Col span={12}>Room 2</Col>
    </Row>
    <Row className= "row">
      <Col span={12}>Room 3</Col>
      <Col span={12}>Room 4</Col>
    </Row>
    <Row className= "row">
      <Col span={12}>Room 5</Col>
      <Col span={12}>Room 6</Col>
    </Row>
  </>
    );
}