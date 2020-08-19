import React, {useState} from 'react'
import UserInfo from "../components/UserInfo/userInfo"
import UserHalls from "../components/UserHalls/userHalls"

export default function User(props) {

    return (
        <div>
            <UserInfo />
            {/* <UserHalls /> */}
            {/* pieceofstatethathasallmyhalls.map(hall => <UserHalls name=pieceofstate.name etc />)*/}
        </div>
    )
}