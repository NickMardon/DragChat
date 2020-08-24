import React, { useState, useEffect } from "react";
import Jitsi from "../components/Jitsi/jitsi";
import Avatar from "../components/Avatar/avatar";
import API from "../utils/api";
// import URLCopyInput from "../components/URLCopyInput/URLCopyInput";
//DnD imports
import DnDFrame from "../components/DndFrame/dndframe.component";
import { Row, Col } from "antd";
import Footer from "../components/Footer/Footer";

export default function Hall(props) {
  return (
    <div>
      <Row style={{height:"88vh", marginTop:"1%"}}>
        <Col s={24} md={8} lg={8}>
          {props.currentUser &&
            props.currentUser.name &&
            props.activeRoom &&
            props.activeRoom.name ? (
              <DnDFrame
                currentUser={props.currentUser}
                userHalls={props.userHalls}
                currentHall={props.currentHall}
                activeRoom={props.activeRoom}
                setActiveRoom={props.setActiveRoom}
              />
            ) : (
              <h1>loading</h1>
            )}
        </Col>
        <Col s={24} md={16} lg={16}>
          <Jitsi activeRoom={props.activeRoom} currentUser={props.currentUser} />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}
