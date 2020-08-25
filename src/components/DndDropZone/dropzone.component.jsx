import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/items";
import { Col } from "antd";
import "./style.css";
import RoomIcon from "./roomicon.png"
import { RoomContext } from "../DndFrame/dndframe.component";

export default function DndDropZone(props) {
  const { markAsConnected } = useContext(RoomContext);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.BADGE,

    drop: (item, monitor) => markAsConnected(props.id),

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Col xs={{ span: 12 }}>
      <div
        className={`dropArea`}
        //  className={`dropArea + ${isOver ? 'isOver':''}`}
        ref={drop}
      >
        {props.name && props.id ? (
          <>
            <img src={RoomIcon}></img>
            <br></br>
            <span className="dropAreaId">Room: {props.id}</span>
            <br></br>
          </>
        ) : (
          <span>???</span>
        )}

        {props.children}
      </div>
    </Col>
  );
}
