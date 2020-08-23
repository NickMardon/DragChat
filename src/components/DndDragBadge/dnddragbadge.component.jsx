import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/items";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import './style.css'

export default function DndDragBadge(props) {

//CURRENT PROPS FROM ABOVE- currentUser={props.currentUser} activeRoom={props.activeRoom}


  const [{ isDragging }, drag] = useDrag({
    //item here is just an object, we can pass whatever, but a TYPE from the util type file is required. passing only user id currently.
    item: {
      type: ItemTypes.BADGE,
      id: props.id,
    },
    collect: (monitor) => ({
      //now that the monitor is watching for dragging, if it isDragging, this will add an "isdragging" prop to our dragging props.
      isDragging: !!monitor.isDragging(),
    }),
  });


  return (
      <Avatar
        shape="square"
        className={`dragBadge + ${isDragging ? 'dragging':''}`}
        size={70}
        icon={<UserOutlined />}
        ref={drag}
      ></Avatar>
    
  );
}
