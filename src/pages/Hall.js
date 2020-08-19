import React, {useState, useEffect} from 'react';
import Jitsi from "../components/Jitsi/jitsi"
import Tabs from "../components/Tabs/tabs"
import Rooms from '../components/dnd/rooms/rooms'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Avatar from "../components/Avatar/avatar"
import API from '../utils/api';


import {useParams} from "react-router-dom"


export default function Room() {

    // const [userHallState, setUserHallState] = useState({})
    // let { id } = useParams();

    // //TODO:TODO:TODO: useparams, here is this passable from the route itself?
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
            <Avatar />
        </div>
    )
}
