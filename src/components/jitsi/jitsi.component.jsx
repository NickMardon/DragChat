import React, { useState, useEffect } from 'react'



export default function Jitsi() {

     const [roomName, setRoomName ]  = useState(
        'evans-super-awesomely-secret-meeting-9238233h42938rhfuswefb32r9hj'
      
      )
      const [userFullName, setFullName] = useState(
        'Evan the mighty SNACKO'
      )

      let api=null;

      useEffect(()=> {
        jitsiMeetFrame();
      })

      function jitsiMeetFrame() {
        
        //TODO:if there is a room disconnect 
        //then make me a new room using the props below?
        const domain = "meet.jit.si";
            const options = {
              roomName: roomName,
              width: 700,
              height: 700,
              parentNode: document.querySelector("#meet"),

              userInfo: {
              email: 'epacholski86@gmail.com',
              displayName: userFullName
              },

              configOverwrite: {
              prejoinPageEnabled: false
              }
            };
            const api = new window.JitsiMeetExternalAPI(domain, options);
            return api
      }


    return (
        <div id="meet"></div>
    )
}
