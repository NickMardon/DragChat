import React, {useState} from 'react'
import UserInfo from "../components/UserInfo/userInfo"
import UserHalls from "../components/UserHalls/userHalls"

const dummyUser = {}

export default function User(props) {

    // readsessions comes in in the useeffect once we GET to this page instead of dependency array being empty set it to the props.currentuser (whatever I pass for current user so it updates on change from above.)
    return (
        <div>
            <UserInfo user={dummyUser}/>
            {/* <UserHalls /> */}
            {/* pieceofstatethathasallmyhalls.map(hall => <UserHalls name=pieceofstate.name etc />)*/}
        </div>
    )
}