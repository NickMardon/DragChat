import React, {useState, useEffect} from 'react';
import Jitsi from "../components/Jitsi/jitsi"
import Tabs from "../components/Tabs/tabs"
// import Rooms from '../components/dnd/rooms/rooms'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
import Avatar from "../components/Avatar/avatar"
import API from '../utils/api';
// import URLCopyInput from "../components/URLCopyInput/URLCopyInput";

// import {useParams} from "react-router-dom"
// import userHall from '../components/UserHalls/userHalls';
// import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';


//TODO:RENAME ROOM AFTER DONE WITH ITS FUNCTION.
export default function Hall(props) {

   //setting the current hall to be in for passing into jitsi
   const [currentHall, setCurrentHall] = useState({})

   //TODO:
   //TODO:GUT THIS FOLLOWING BLOCK AFTER FINISHING WITH STATE ABOVE. 
   //TODO:
   //TODO:
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

    //TODO: insert a second piece of state that cares about only the current hall. 

    return (
        <div> 

            <Jitsi activeRoom={props.activeRoom} currentUser={props.currentUser}/>
            <Tabs />
            
            <Avatar currentUser={props.currentUser}/>
        </div>
    )
}

// {/* <DndProvider backend={HTML5Backend}>
// <Rooms />
// </DndProvider> */}
