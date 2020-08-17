import React from 'react';
import NavFrame from "../components/NavFrame/NavFrame"
import Jitsi from "../components/jitsi/jitsi.component"
import Tabs from "../components/Tabs/tabs"


export default function Room() {
    return (
        <div>
            <NavFrame />
            <Jitsi />
            <Tabs />
        </div>
    )
}
