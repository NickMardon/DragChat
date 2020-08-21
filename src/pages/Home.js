import React, {useState} from "react";
import AccountForm from "../components/AccountForm/AccountForm.component";
import SignIn from "../components/SignIn/SignIn";
import CreateHall from "../components/CreateHall/createHall";
import Webcam from "../components/Webcam/Webcam";
import Description from "../components/Description/Description";

export default function Home(props) {
  const [isLoggedIn,] = useState(props.currentUser?.id? true : false, [props.currentUser])
  //removed from below in description --> isLoggedIn={isLoggedIn}

  return (
    <div>
      {/* <Jitsi /> */}
      <Description isLoggedIn={isLoggedIn} currentUser={props.currentUser} />
      <Webcam />
      {/* {isLoggedIn && <CreateHall />} */}
      {/* <URLCopyInput /> */}
    </div>
  );
}
