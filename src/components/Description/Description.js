import React from "react";
import "./index.css";
import "./backgroundPhoto.jpeg";
import AccountForm from "../AccountForm/AccountForm.component";
import SignIn from "../SignIn/SignIn";
import CreateHall from "../CreateHall/createHall";

export default function Description(props) {
    return (
        <div className="jumbotron">
            <h1>Dropin Video Conferences</h1>
            <h3>Broadside heave down salmagundi belaying pin yawl ballast bucko parrel ho doubloon. Hornswaggle list Nelsons folly Jolly Roger deadlights lugger long boat reef sails hail-shot Spanish Main. Cable list Pirate Round overhaul marooned tackle provost Admiral of the Black haul wind rutters.</h3>
            <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
      {!props.isLoggedIn && <SignIn setCurrentUser={props.setCurrentUser} />}
      {!props.isLoggedIn && <AccountForm setCurrentUser={props.setCurrentUser} />}
      {props.isLoggedIn && <CreateHall />}
      </div>
        </div>
    )
}