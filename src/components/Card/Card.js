import React from "react";
import {  Card  } from "antd";
import { Col } from 'antd';
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export default function Buttons() {
    return (
       <Col s = {24} md ={12} lg={12} style={{width:"100%"}}>
        <div style={{height:"100%"}}>
            <Card className="card" title="Our Application is Made For">
                <div className="cardRow">
                <FontAwesomeIcon className="icon" icon={faBusinessTime}/>
              <p>Business Video Conferences</p>
                </div>
                <div className="cardRow">
                <FontAwesomeIcon className="icon" icon={faUsers}/>
              <p>Hangouts and Games with Friends</p>
                </div>
                <div className="cardRow">
                <FontAwesomeIcon className="icon" icon={faSchool}/>
              <p>Online Education</p>
                </div>
            </Card>
        </div>
        </Col>
    )
}