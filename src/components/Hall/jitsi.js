import React, {useState, useEffect } from 'react';
import Hall from "./hall";
import 'antd/dist/antd.css';
import './hall.css';



export default function Jitsi() {
  const [roomName, setRoomName ]  = useState(
    'evans-super-awesomely-secret-meeting-9238233h42938rhfuswefb32r9hj'
  )
  const [userFullName, setFullName] = useState(
    'Evan the mighty SNACKO'
  )
  useEffect(()=> {
    jitsiMeetFrame();
  })
  function jitsiMeetFrame() {
    const domain = "meet.jit.si";
        const options = {
          roomName: roomName,
          width: "100%",
          height: "100%",
          style: "border: 5px groove red",
          parentNode: document.querySelector("#meet"),
          userInfo: {
          // can do DB retrieval of person's login info based on session id, look into Oauth
          email: 'epacholski86@gmail.com',
          // Oauth will be necessary here, and really tie some awesomeness in.
          displayName: "Mike"
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
      <div id="container">
        <div id="meet" /*style={styles.jitsi}*/></div>
      </div>
      <div id="tinyColumn"><Hall /></div>
    </div>
  );
}
