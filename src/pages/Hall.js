import React, { useState, useEffect } from "react";
import Jitsi from "../components/Jitsi/jitsi";
import API from "../utils/api";
// import URLCopyInput from "../components/URLCopyInput/URLCopyInput";
//DnD imports
import DnDFrame from "../components/DndFrame/dndframe.component";
import { Row, Col } from "antd";
import Footer from "../components/Footer/Footer";
import "../index.css";

export default function Hall(props) {
  return (
    <div id="hall">
        <Col s={24} md={24} lg={24} style={{ width: "100%" }}></Col>
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
          <Col/>
          <Jitsi activeRoom={props.activeRoom} currentUser={props.currentUser} />
        
      <Row>
        <Footer />
      </Row>
    </div>
  );
}
