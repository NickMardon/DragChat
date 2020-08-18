import React from 'react';
import HallForm from '../components/hallform/hallform.component';
import Jitsi from '../components/Jitsi/jitsi';
import URLCopyInput from "../components/URLCopyInput/URLCopyInput";

export default function Home() {
    return (
        <div>
            <URLCopyInput />
            <Jitsi />
            <HallForm />
        </div>
    )
}