import { Button } from 'antd';
import React from 'react';
import "./index.css";

export default function Buttons(props) {
    return (
        <div>
            <Button className={props.buttonType} onClick={props.onClick} type="text">
                {props.text}
            </Button>
        </div>
    )
}
