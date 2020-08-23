import "./style.css";
import React, {createContext} from "react";
import { Row, Col, Divider } from "antd";
import DndDropZone from "../DndDropZone/dropzone.component"
import DndDragBadge from "../DndDragBadge/dnddragbadge.component"

//TODO: set context.
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// TODO: working part,verify corrext export. 
export const RoomContext = createContext({
    markAsConnected: null
})

export default function DndFrame(props) {

    const markAsConnected = id => {
        if (props.activeRoom&&props.activeRoom.id) {
            const activeRoom = props.currentHall.Main.filter((room, i) => room.id === id);
            props.setActiveRoom(activeRoom[0])
        }
    }

  //TODO: write exportable context function (will filter rooms list for id and call the method from above for setting current room, make sure it is passed from above)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dndFrame">
        <Row gutter={[0, 16]} style={{ backgroundColor: "lightblue" }}>
          <h6>I will be adropdown menu, with props.</h6>
        </Row>

        <Row gutter={[8, 8]} justify="space-between" align="middle">

          <Col xs={{ span: 10 }} align="middle" style={{ backgroundColor: "lightgray"}}>

            <div style={{height: '100%'}} className="currentRoomBox">
              <Divider orientation="middle">Current Room</Divider>
              <br></br>
              {/* TODO: PUT THE COPY SHARE LINK HERE */}
              {props.activeRoom && props.activeRoom.name
                ? (
                props.activeRoom.name
                )
                : "Name"}

                {/* draggable badge component below. */}
                <DndDragBadge currentUser={props.currentUser} activeRoom={props.activeRoom}/>

            </div>

          </Col>

         {/* THIS BLOCK RENDERS THE DROP ZONES PER ROOM, SEE MAP */}
          <Col xs={{ span: 14 }} style={{ textAlign: "center", paddingRight: "0.5rem" }}>
            <Row gutter={[8, 16]} className="roomRow">



              {/* {props.currentHall && props.currentHall.Main[0] ? (
                props.currentHall.Main.map((room) => (
                  <DndDropZone key={room.id} name={room.name} id={room.id} />
                ))
              ) : (
                <h1>???</h1>
              )} */}

              {props.currentHall && props.currentHall.Main[0] && props.activeRoom.id ? ( 
                  props.currentHall.Main
                  .filter((room, i) => room.id !== props.activeRoom.id)
                  .map((room, i) =>(
                    <DndDropZone 
                    key={room.id} 
                    name={room.name} 
                    id={room.id} 
                    />
                  ))
              ) : (
                <h1>???</h1>
              )}

            </Row>
          </Col>
        </Row>
      </div>
    </DndProvider>
  );
}
