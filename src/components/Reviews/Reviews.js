import React from "react";
import {  Card  } from "antd";
import { Col } from 'antd';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export default function Buttons(props) {
    return (
       <Col s = {24} md ={12} lg={8} style={{width:"100%"}}>
        <div style={{height:"100%"}}>
            <Card className="reviewCard" title="Our Users Say">
                <div className="starRow">
                <FontAwesomeIcon className="star" icon={faStar}/><FontAwesomeIcon className="star" icon={faStar}/><FontAwesomeIcon className="star" icon={faStar}/><FontAwesomeIcon className="star" icon={faStar}/><FontAwesomeIcon className="star" icon={faStar}/>
                </div>
                <div className="quote">
                     <p>{props.review}</p>
                    <p>-{props.reviewer}</p>
                </div>
            </Card>
        </div>
        </Col>
    )
}