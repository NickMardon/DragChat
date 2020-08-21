import React from "react";
import AccountForm from "../components/AccountForm/AccountForm.component";
import SignIn from "../components/SignIn/SignIn";
import CreateHall from "../components/CreateHall/createHall";
<<<<<<< HEAD
//import Jitsi from "../components/Jitsi/jitsi";
import URLCopyInput from "../components/URLCopyInput/URLCopyInput";
=======
>>>>>>> dev
import Webcam from "../components/Webcam/Webcam";
import Description from "../components/Description/Description";

export default function Home(props) {
    
    
    console.log(props)


  const isLoggedIn = props.currentUser? true : false;


  return (
    <div>
      {/* <Jitsi /> */}
<<<<<<< HEAD
      <Description currentUser={props.currentUser} isLoggedIn={isLoggedIn} />
      <Webcam />
      {/* {isLoggedIn && <CreateHall />} */}
=======
      <Description />
      {!isLoggedIn && <SignIn setCurrentUser={props.setCurrentUser} />}
      {!isLoggedIn && <AccountForm setCurrentUser={props.setCurrentUser} />}
      {isLoggedIn && <CreateHall />}
      <Webcam />
     
>>>>>>> dev
      {/* <URLCopyInput /> */}
    </div>
  );
}
