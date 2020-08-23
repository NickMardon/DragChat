import React, { useState, useEffect } from "react";
import Jitsi from "../components/Jitsi/jitsi";
import Avatar from "../components/Avatar/avatar";
import API from "../utils/api";
// import URLCopyInput from "../components/URLCopyInput/URLCopyInput";
//DnD imports
import DnDFrame from "../components/DndFrame/dndframe.component";

export default function Hall(props) {
  return (
    <div>
      <Jitsi activeRoom={props.activeRoom} currentUser={props.currentUser} />

      {/* <Avatar currentUser={props.currentUser}/> */}

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
    </div>
  );
}

// {/* <DndProvider backend={HTML5Backend}>
// <Rooms />
// </DndProvider> */}
