import { Row, Col } from 'antd';
import React from 'react';
import Button from '../Button/Button';

export default function Grid(){
    return (
  <>
    <Row className= "row">
      <Col span={24}>Placeholders for different rooms</Col>
    </Row>
    <Row className= "row">
      <Col span={12}><Button /></Col>
      <Col span={12}><Button /></Col>
    </Row>
    <Row className= "row">
      <Col span={12}><Button /></Col>
      <Col span={12}><Button /></Col>
    </Row>
    <Row className= "row">
      <Col span={12}><Button /></Col>
      <Col span={12}><Button /></Col>
    </Row>
    
  </>
    );
}