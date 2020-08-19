import React from 'react'
import { Card } from 'antd';
import Button from "../Button/Button"

export default function userHall(props) {
    for (var i =0; i<props.length; i++){
        return ( 
            <div>
                <Card title="User's Halls" style={{ width: "44%", margin: "2%" }}>
                    <p>Hall name {props[i].name}</p><Button /><Button />
                    <p>Number of rooms {props[i].hall_size}</p><Button /><Button />
                    <p>password {props[i].password}</p><Button /><Button />
                    <p>Hall theme {props[i].theme_id}</p><Button /><Button />
                </Card>
            </div>
        )
    }
}

userHall(
[
    {
    name: "Mike's",
    hall_size: 4,
    password: "wordpass",
    theme_id: "coding fun"
    },
    {
    name: "Joe's",
    hall_size: 6,
    password: "wordyword",
    theme_id: "Jedi programming"
    }
]
)