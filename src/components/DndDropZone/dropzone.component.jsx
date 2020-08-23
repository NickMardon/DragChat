import React from "react";
import "./style.css"

export default function DndDropZone(props) {
  return (
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
  );
}
