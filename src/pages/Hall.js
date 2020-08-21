import React, {useState, useEffect} from 'react';
import Jitsi from "../components/Jitsi/jitsi"
import Tabs from "../components/Tabs/tabs"
import Rooms from '../components/dnd/rooms/rooms'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Avatar from "../components/Avatar/avatar"
import API from '../utils/api';
import URLCopyInput from "../components/URLCopyInput/URLCopyInput";
import Chat from "../components/Chat/chat"
import {useParams} from "react-router-dom"
import userHall from '../components/UserHalls/userHalls';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';



export default function Room(props) {

    const [userHalls, setUserHalls] = useState({})

    //TODO:TODO:TODO: a piece of jitsi state that lives at this level and is interacted with by DND or buttons, this state includes meeting info drawn from logged in user AND hall in question.


    // let { id } = useParams();

    // //TODO:TODO:TODO: useparams, here is this passable from the route itself?
    // // MIGHT be most effective to use effect to grab all halls belonging to user for "tabs" span, and then have each "tab"
    // make an API call to /api/halls/1/rooms to display that hall's rooms below in the DnD.
    // useEffect(()=>{
    //     API.getAllUserHalls(id).then(res=>{
    //         console.log(res.data);
    //     })
    // })


    return (
        <div>          
            <Jitsi />
            <Tabs />

            {/* <DndProvider backend={HTML5Backend}>
            <Rooms />
            </DndProvider> */}



            {/* <Avatar currentUser={props.currentUser}/> */}
            <Chat />
        </div>
    )
}



// this piece of code maps a nonexistent object  now, commenting out and moving below
// <div style={{backgroundColor: "#ad9f9e", width: '30vw'}}>
// <h3>DUMMY HALL REPRESENTATION</h3>
// <h6>{userHalls.name}</h6>
// <p>{userHalls.description}</p>
// {/* the below should be a button and not an atag, with an onclick that lives at this level */}
// {userHalls.Main.map(room => <p><strong><a href='#'>{room.name}</a></strong></p>)}
// </div>