import React from "react";
import AccountForm from "../components/AccountForm/AccountForm.component";
import SignIn from "../components/SignIn/SignIn";
import CreateHall from "../components/CreateHall/createHall";
import Webcam from "../components/Webcam/Webcam";
import Description from "../components/Description/Description";

export default function Home(props) {
    
    
  console.log(props)


  const isLoggedIn = props.currentUser? true : false;


  return (
    <div>
      {/* <Jitsi /> */}
      <Description currentUser={props.currentUser} isLoggedIn={isLoggedIn} />
      <Webcam />
      {/* {isLoggedIn && <CreateHall />} */}
      {/* <URLCopyInput /> */}
    </div>
  );
}
