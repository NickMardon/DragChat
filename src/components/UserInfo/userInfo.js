import React from 'react'
import { Card } from 'antd';
import Button from "../Button/Button"
import Badge from "../Avatar/avatar"
import { Row, Col } from 'antd';
import "./index.css";

export default function userInfo(props) {
    return (
    
        <div className="col">
            {/* the below line is the layered condition ternary that renders a wait tag if the props haven't loaded yet */}
            {props.user?.id ? (

                <Card className="userdashboard" title="User Dashboard">
                    <Row className="row usertext" style={{ margin: 4 }} >
                        <Col span={6}>Avatar</Col>
                        <Col span={18}>{props.user?.name?<Badge currentUser={props.user.name}/>:
                        <Badge/>}</Col>
        

                    </Row>
                    <Row className="row usertext">
                        <Col span={24}>User Id:  {props.user.id}</Col>
                    </Row>
                    <Row className="row usertext">
                        <Col span={24}>Name:  {props.user.name} </Col>
                    </Row>
                    <Row className="row usertext">
                        <Col span={24}>Email: {props.user.email} </Col>
                    </Row>
                </Card>
            )
                :
                <h1>Please wait while we load your info</h1>}
        </div>
    )
}

