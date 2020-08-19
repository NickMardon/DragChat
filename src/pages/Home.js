import React from 'react';
import AccountForm from '../components/AccountForm/AccountForm.component';
import SignIn from '../components/SignIn/SignIn';
import CreateHall from '../components/CreateHall/createHall';
import Jitsi from '../components/Jitsi/jitsi';
import URLCopyInput from "../components/URLCopyInput/URLCopyInput";
import Webcam from "../components/Webcam/Webcam";

export default function Home() {
    return (
        <div>
            <URLCopyInput />
            {/* <Jitsi /> */}
            <Webcam />
            <SignIn />
            <AccountForm />
            <CreateHall />
        </div>
    )
}