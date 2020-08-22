import React from 'react'
import { Card } from 'antd';
import Button from "../Button/Button"
import Avatar from "../Avatar/avatar"
import { Row, Col } from 'antd';

export default function userInfo(props) {
    return (
    
        <div className="col">
            {/* the below line is the layered condition ternary that renders a wait tag if the props haven't loaded yet */}
            {props.user?.id ? (

                <Card title="User Information" extra={<Button />} style={{ width:"96%", margin: "2%", fontSize: "1.5em", opacity: ".8" }}>
                    <Row className="row" style={{ margin: 10 }} >
                        <Col span={4}>Avatar</Col>
                        <Col span={16}><Avatar /></Col>

                    </Row>
                    <Row className="row">
                        <Col span={24}>User Id:  {props.user.id}</Col>
                    </Row>
                    <Row className="row">
                        <Col span={24}>name:  {props.user.name} </Col>
                    </Row>
                    <Row className="row">
                        <Col span={24}>email: {props.user.email} </Col>
                    </Row>
                </Card>
            )
                :
                <h1>please wait while we load your info</h1>}
        </div>
    )
}

