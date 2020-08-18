import React from 'react';
import HallForm from '../components/hallform/hallform.component';
import SignIn from '../components/SignIn/SignIn';
import Jitsi from '../components/Jitsi/jitsi';

export default function Home() {
    return (
        <div>
            <Jitsi />
            <SignIn />
            <HallForm />
        </div>
    )
}