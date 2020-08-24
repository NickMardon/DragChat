import { Button } from 'antd';
import React from 'react';
import "./index.css";

export default function Buttons() {
    return (
        <div>
            <Button className="deleteBtn" onClick="createRoom()" type="text">
                Delete
            </Button>
        </div>
    )
}
