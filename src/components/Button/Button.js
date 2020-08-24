import { Button } from 'antd';
import React from 'react';
import "./index.css";

export default function Buttons(props) {
    return (
        <div>
            <Button className="connectBtn" onClick={props.onClick} type="text">
                {props.text}
            </Button>
        </div>
    )
}
