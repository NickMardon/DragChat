import React, {useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';



export default function Jitsi(props) {
  let api=null;

  useEffect(()=> {
    if (api) {
      api.executeCommand('hangup');
      api.dispose();
    }
    if (props.activeRoom&&props.activeRoom.name) {
      jitsiMeetFrame(props.activeRoom.name, props.currentUser.name, props.currentUser.email);
    }
  }, [props.activeRoom, props.currentUser])

  function jitsiMeetFrame(name, email, displayName) {
    const domain = "meet.jit.si";
        const options = {
          roomName: name ,
          width: "100%",
          height: "100%",
          zIndex: 0,
          parentNode: document.querySelector("#meet"),
          userInfo: {
          email: email,
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
