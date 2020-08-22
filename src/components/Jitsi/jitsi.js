import React, {useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';



export default function Jitsi(props) {
  // const [roomName, setRoomName ]  = useState(
  //   'evans-super-awesomely-secret-meeting-9238233h42938rhfuswefb32r9hj'
  // )
  // const [userFullName, setFullName] = useState(
  //   'Evan the mighty SNACKO'
  // )

  // TODO:still need the connect issue, maybe: let api = null

  useEffect(()=> {
    if (props.activeRoom&&props.activeRoom.name) {
      jitsiMeetFrame(props.activeRoom.name, props.currentUser.name, props.currentUser.email);
    }
  }, [props.activeRoom, props.currentUser])

  function jitsiMeetFrame(name, email, displayName) {
    //TODO: CURRENT WORK: TERNARY

    const domain = "meet.jit.si";
        const options = {
          roomName: name ,
          width: "100%",
          height: "100%",
          zIndex: 0,
          parentNode: document.querySelector("#meet"),
          userInfo: {
          // can do DB retrieval of person's login info based on session id, look into Oauth
          email: email,
          // Oauth will be necessary here, and really tie some awesomeness in.
          displayName: displayName
          },
          configOverwrite: {
          prejoinPageEnabled: false
          }
        };
        const api = new window.JitsiMeetExternalAPI(domain, options);
        return api
  }
  return (

    <div>
     {props.activeRoom?.name? (

      <div id="container">
        <div id="meet" ></div>
      </div>
     ) : <h1>LOADING</h1>
     }
    </div>
  );
}
