import React, {useState, useEffect} from 'react';
import Jitsi from "../components/Jitsi/jitsi"
import Tabs from "../components/Tabs/tabs"
import Rooms from '../components/dnd/rooms/rooms'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Avatar from "../components/Avatar/avatar"
import API from '../utils/api';


import {useParams} from "react-router-dom"
import userHall from '../components/UserHalls/userHalls';

//dummy const to use for hallstate for now
// the below object is the result of /api/halls/1/rooms, where 1 is being passed as an ID I want to have belong to a user
// this array will be responsible for primary drag and drop function, as the DND area will be rendered for the rooms.
// will also when retrieving this data and setting the state, need to apply to Main[1] a status of 'conn' and a  
const dummyHallState = {
    "id": 1,
    "name": "my first study hall",
    "password": "workkkkkkkkkkkkkkkk",
    "description": "we love melodysheep round here",
    "hallSize": 3,
    "createdAt": "2020-08-19T05:38:07.000Z",
    "updatedAt": "2020-08-19T05:38:07.000Z",
    "UserId": 1,
    "Main": [
        {
            "id": 1,
            "name": "myfirststudyhall_test_0_1597815487276",
            "password": "workkkkkkkkkkkkkkkk",
            "createdAt": "2020-08-19T05:38:07.000Z",
            "updatedAt": "2020-08-19T05:38:07.000Z",
            "HallId": 1
        },
        {
            "id": 2,
            "name": "myfirststudyhall_test_1_1597815487277",
            "password": "workkkkkkkkkkkkkkkk",
            "createdAt": "2020-08-19T05:38:07.000Z",
            "updatedAt": "2020-08-19T05:38:07.000Z",
            "HallId": 1
        },
        {
            "id": 3,
            "name": "myfirststudyhall_test_2_1597815487277",
            "password": "workkkkkkkkkkkkkkkk",
            "createdAt": "2020-08-19T05:38:07.000Z",
            "updatedAt": "2020-08-19T05:38:07.000Z",
            "HallId": 1
        }
    ]
}


export default function Room(props) {

    const [userHallState, setUserHallState] = useState(dummyHallState)

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


            <div style={{backgroundColor: "#ad9f9e", width: '30vw'}}>
                <h3>DUMMY HALL REPRESENTATION</h3>
                <h6>{userHallState.name}</h6>
                <p>{userHallState.description}</p>
                {/* the below should be a button and not an atag, with an onclick that lives at this level */}
                {userHallState.Main.map(room => <p><strong><a href='#'>{room.name}</a></strong></p>)}
            </div>


            <Avatar currentUser={props.currentUser}/>
        </div>
    )
}
