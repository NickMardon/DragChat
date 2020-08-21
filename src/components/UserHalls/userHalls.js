import React from 'react'
import { Card } from 'antd';
import Button from "../Button/Button"

export default function userHall(props) {

        return ( 
            <div>
                <Card title="User's Halls" style={{ width: "44%", margin: "2%" }}>
                    <p>Hall name {props.name}</p><Button /><Button />
                    <p>Number of rooms {props.hall_size}</p><Button /><Button />
                    <p>password {props.password}</p><Button /><Button />
                    <p>Hall theme {props.theme_id}</p><Button /><Button />
                </Card>
            </div>
        )
}

