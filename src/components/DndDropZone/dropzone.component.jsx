import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/items";
// TODO: IMPORT DND CONTEXT AS EXPORTED FROM DNDFRAME
import { Col } from "antd";
import "./style.css";

export default function DndDropZone(props) {

  //     const { markAsConnected } = useContext(RoomContext)

  //     const[{isOver}, drop] = useDrop({
  //     accept: ItemTypes.BADGE,
  //     drop: (item, monitor) => markAsConnected(item.id),
  //     collect: monitor => ({
  //         isOver: !!monitor.isOver()
  //     })
  // })

  return (
    <Col xs={{ span: 12 }}>
      <div
        className={`dropArea`}
        // TODO: className={`dropArea + ${isOver ? 'isOver':''}`}
        //  TODO:ref={drop}
      >
        {props.name && props.id ? (
          <>
            <br></br>
            <br></br>
            <span>{props.id}</span>
            <br></br>
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
