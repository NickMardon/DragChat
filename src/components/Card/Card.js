import React from "react";
import {  Card  } from "antd";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export default function Buttons() {
    return (
        <div className="card">
            <Card title="Our Application is Made For">
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
    )
}