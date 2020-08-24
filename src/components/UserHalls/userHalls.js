import React from 'react'
import { Card } from 'antd';
import Button from "../Button/Button"
import { Row, Col } from 'antd';
import "./index.css";

export default function userHall(props) {
    console.log(props);
    return (
        
    <div className="col">
        {props.props&&props.props.name?
                (<Card title= {props.props.name} extra = {<Button />} style={{width:"96%", margin: "2%", fontSize: "1.5em", opacity: ".8"}}>
            
            <Row >
                <p>Number of rooms: {props.props.hallSize}</p>
            </Row>
            <Row>
                <p>Password: {props.props.password}</p>
            </Row>    
            <Row>
                <p>Description: {props.props.description}</p>
            </Row>
            
        </Card>):<h1>this is no bueno</h1>}
    </div>
    
    )
}

