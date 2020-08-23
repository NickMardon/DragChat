import React from "react";
import "./style.css";
import { Row, Col, Divider } from "antd";
// TODO: import draggable item
// TODO: import drop zone render
// LIKE THIZ
import DndDropZone from "../DndDropZone/dropzone.component"
//TODO: set context.
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DndFrame(props) {
  //TODO: export room context
  //TODO: write exportable context function (will filter rooms list for id and call the method from above for setting current room, make sure it is passed from above)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dndFrame">
        <Row gutter={[0, 16]} style={{ backgroundColor: "lightblue" }}>
          <h6>I will be adropdown menu, with props.</h6>
        </Row>

        <Row gutter={[0, 16]} justify="space-around" align="middle">
          <Col style={{ height: "100%", backgroundColor: "lightgray" }}>
            <Divider orientation="middle">Current Room</Divider>
            <br></br>
            {/* TODO: rendering the active room name as a placeholder */}
            {props.activeRoom && props.activeRoom.name
              ? props.activeRoom.name
              : "Name"}
          </Col>

          <Col style={{ textAlign: "center" }}>
            {props.currentHall && props.currentHall.Main[0]
            ? props.currentHall.Main.map(room => <DndDropZone name={room.name} id={room.id}/>
            ) : (
                <h1>???</h1>
             )}
          </Col>
        </Row>
      </div>
    </DndProvider>
  );
}
