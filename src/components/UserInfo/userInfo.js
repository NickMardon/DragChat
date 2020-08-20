import React from 'react'
import { Card } from 'antd';
import Button from "../Button/Button"
import Avatar from "../Avatar/avatar"
import { Row, Col } from 'antd';

export default function userInfo(props) {
    return (
        <div>
            <Card title="User information" style={{ width: "44%", margin: "2%", fontSize: "1.5em"}}>
            <Row className= "row" style={{margin: 10}} >
                <Col span={4}>avatar</Col>
                <Col span={16}><Avatar /></Col>
                <Col span={4}><Button /></Col>
            </Row>
            <Row className= "row">
                <Col span={8}>Id {props.user.id}</Col>
                <Col span={12}></Col>
                <Col span={4}><Button /></Col>
            </Row>
            <Row className= "row">
                <Col span={8}>name {props.user.name} </Col>
                <Col span={12}></Col>
                <Col span={4}><Button /></Col>
            </Row>
            <Row className= "row">
                <Col span={8}>email {props.user.email} </Col>
                <Col span={12}></Col>
                <Col span={4}><Button /></Col>
            </Row>
            {/* <Row className= "row">
                <Col span={8}>password {props.password} </Col>
                <Col span={12}></Col>
                <Col span={4}><Button /></Col>
            </Row> */}
            </Card>
        </div>
    )
}

