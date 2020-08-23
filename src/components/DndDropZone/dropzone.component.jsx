import React from "react";
import {Col } from "antd";
import "./style.css"

export default function DndDropZone(props) {
  return (
      <Col xs={{span: 12}}>

     
    <div className="dropArea">
      {
               props.name&&props.id
               ? (
            <>
        
            <br></br>
            <span>{props.id}</span></>

               ) : (
                   <span>???</span>
               )
           } 

    </div>
    </Col>
  );
}
