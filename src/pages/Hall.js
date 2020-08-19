import React from 'react';
import Jitsi from "../components/Jitsi/jitsi"
import Tabs from "../components/Tabs/tabs"
import Rooms from '../components/dnd/rooms/rooms'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Avatar from "../components/Avatar/avatar"


export default function Room() {
    return (
        <div>          
            <Jitsi />
            <Tabs />

            {/* <DndProvider backend={HTML5Backend}>
            <Rooms />
            </DndProvider> */}
            <Avatar />
        </div>
    )
}
