import React from 'react';
import Jitsi from "../components/Jitsi/jitsi"
import Tabs from "../components/Tabs/tabs"
import Avatar from "../components/Avatar/avatar"


export default function Room() {
    return (
        <div>          
            <Jitsi />
            <Tabs />
            <Avatar />
        </div>
    )
}
