import React from 'react'
import { Card } from 'antd';
import Button from "../Button/Button"
import Avatar from "../Avatar/avatar"
import { Row, Col } from 'antd';

export default function userInfo(props) {
    return (<div>
    {/* the below line is the layered condition ternary that renders a wait tag if the props haven't loaded yet */}
            {props.user?.id? (

            <Card title="User information" style={{ width: "44%", margin: "2%", fontSize: "1.5em"}}>
            <Row className= "row" style={{margin: 10}} >
                <Col span={4}>avatar</Col>
                <Col span={16}><Avatar /></Col>
                <Col span={4}><Button /></Col>
            </Row>
            <Row className= "row">
                <Col span={8}>User Id:<br></br> {props.user.id}</Col>
                <Col span={12}></Col>
                <Col span={4}><Button /></Col>
            </Row>
            <Row className= "row">
                <Col span={8}>name: <br></br> {props.user.name} </Col>
                <Col span={12}></Col>
                <Col span={4}><Button /></Col>
            </Row>
            <Row className= "row">
                <Col span={8}>email: {props.user.email} </Col>
                <Col span={12}></Col>
                <Col span={4}><Button /></Col>
            </Row>
            {/* <Row className= "row">
                <Col span={8}>password {props.password} </Col>
                <Col span={12}></Col>
                <Col span={4}><Button /></Col>
            </Row> */}
            </Card>
            )
            :
            <h1>please wait while we load your info</h1>}
            </div>
    )
}

