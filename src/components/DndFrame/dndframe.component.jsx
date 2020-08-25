import "./style.css";

import React, { createContext, useEffect } from "react";
import URLCopyInput from "../URLCopyInput/URLCopyInput"
import { Row, Col, Divider } from "antd";
import DndDropZone from "../DndDropZone/dropzone.component";
import DndDragBadge from "../DndDragBadge/dnddragbadge.component";

//original dnd provider set
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from 'react-dnd-touch-backend';

// responsive backend set -- NOT WORKING;
// import { DndProvider } from 'react-dnd-multi-backend';
// import TouchBackend from 'react-dnd-touch-backend';
// import HTML5toTouch from 'react-dnd-multi-backend';

export const RoomContext = createContext({
  markAsConnected: null,
});


export default function DndFrame(props) {
  const markAsConnected = (id) => {
    if (
      props.activeRoom &&
      props.activeRoom.id &&
      props.currentHall &&
      props.currentHall.Main
    ) {
      const activeRoom = props.currentHall.Main.filter(
        (room, i) => room.id === id
      );
      //   handling the disconnect, set it to nothing first
      props.setActiveRoom({});
      props.setActiveRoom(activeRoom[0]);
    }
  };
  
  return (
    <DndProvider backend={window.innerWidth<600?TouchBackend :HTML5Backend}>
      <RoomContext.Provider value={{ markAsConnected }}>
        <div className="dndFrame">
          <Row gutter={[0, 16]}>
           
            <URLCopyInput />
           
          </Row>

          <Row gutter={[8, 8]} justify="space-between">
            <Col
              xs={{ span: 24 }}
              style={{ height: "100%", backgroundColor: "transparent" }}
            >
              <div style={{ height: "230px" }} className="currentRoomBox">
                <Divider orientation="middle">Current Room</Divider>
                <br></br>
                {/* TODO: PUT THE COPY SHARE LINK HERE */}
                {props.activeRoom && props.activeRoom.name
                  ? props.activeRoom.name
                  : "Loading"}
                  <br></br>
                {/* draggable badge component below. */}
                <DndDragBadge
                  currentUser={props.currentUser}
                  activeRoom={props.activeRoom}
                />
              </div>
            </Col>

            {/* THIS BLOCK RENDERS THE DROP ZONES PER ROOM, SEE MAP */}
            <Col
              xs={{ span: 22 }}
              style={{ textAlign: "center", paddingRight: "0.5rem" }}
            >
              <Row gutter={[8, 16]} className="roomRow">
                {props.currentHall &&
                props.currentHall.Main[0] &&
                props.activeRoom.id ? (
                  props.currentHall.Main.filter(
                    (room, i) => room.id !== props.activeRoom.id
                  ).map((room, i) => (
                    <DndDropZone key={room.id} name={room.name} id={room.id} />
                  ))
                ) : (
                  <h1>???</h1>
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </RoomContext.Provider>
   </DndProvider>
  );
}
