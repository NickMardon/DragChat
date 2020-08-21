import React from 'react'
import { Card } from 'antd';
import Button from "../Button/Button"

export default function userHall(props) {
    console.log(props);
    return (
        
    <div>
        {props.props&&props.props.name?
        (<Card title= {props.props.name} style={{ width: "44%", margin: "2%" }  }><Button /><Button />
            <p>Hall name {props.props.name}</p>
            <p>Number of rooms {props.props.hallSize}</p><Button /><Button />
            <p>password {props.props.password}</p><Button /><Button />
            <p>Hall theme {props.props.description}</p><Button /><Button />
        </Card>):<h1>this is no bueno</h1>}
    </div>
    
    )
}

