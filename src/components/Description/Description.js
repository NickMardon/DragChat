import React, { useState } from "react";
import "./index.css";
import "./backgroundPhoto.jpeg";
import AccountForm from "../AccountForm/AccountForm.component";
import SignIn from "../SignIn/SignIn";
import CreateHall from "../CreateHall/createHall";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Description(props) {

    const isLoggedIn = props.currentUser?.id ? true : false

    return (
        <div className="jumbotron">
            <div className="jumbotronLogo">
                <FontAwesomeIcon className="videoIcon" icon={faVideo} />
                <h1>Videezy</h1>
                <h3 className="rotate">As seen on Manatee Tank !</h3>
            </div>
            <h2>Video Conferences Made Easy!</h2>
            <h4>Sign in or create an account to get started!  Users can join and create halls to host multiple rooms of video conferences.  Use our intuitive drag and drop interface to change rooms within your hall and utilize our global chat to communicate with other users.</h4>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {!isLoggedIn && <SignIn setCurrentUser={props.setCurrentUser} />}
                {!isLoggedIn && <AccountForm setCurrentUser={props.setCurrentUser} />}
                {isLoggedIn && <CreateHall getHalls={props.getHalls} />}
            </div>
        </div>
    )
}