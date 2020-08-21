import React, {useState, useEffect} from 'react';
import Jitsi from "../components/Jitsi/jitsi"
import Tabs from "../components/Tabs/tabs"
import Rooms from '../components/dnd/rooms/rooms'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Avatar from "../components/Avatar/avatar"
import API from '../utils/api';
import URLCopyInput from "../components/URLCopyInput/URLCopyInput";

import {useParams} from "react-router-dom"
import userHall from '../components/UserHalls/userHalls';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';


export default function Room(props) {

   //setting the current hall to be in for passing into jitsi
   const [currentHall, setCurrentHall] = useState({})

   useEffect(()=> {
    if (props.userHalls&&props.userHalls[0]) {
        let thisHall = props.userHalls[0];
        setCurrentHall(props.userHalls[0]) 
    } 
    else {
        setCurrentHall({})}   
    },
    [props.userHalls]
    )

    //TODO: insert a second piece of state that 

    return (
        <div>          
            <Jitsi />
            <Tabs />
            
            <Avatar currentUser={props.currentUser}/>
        </div>
    )
}

// {/* <DndProvider backend={HTML5Backend}>
// <Rooms />
// </DndProvider> */}

// this piece of code maps a nonexistent object  now, commenting out and moving below
// <div style={{backgroundColor: "#ad9f9e", width: '30vw'}}>
// <h3>DUMMY HALL REPRESENTATION</h3>
// <h6>{userHalls.name}</h6>
// <p>{userHalls.description}</p>
// {/* the below should be a button and not an atag, with an onclick that lives at this level */}
// {userHalls.Main.map(room => <p><strong><a href='#'>{room.name}</a></strong></p>)}
// </div>