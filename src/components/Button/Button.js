import { Button } from 'antd';
import React from 'react'

export default function Buttons() {
    return (
        <div>
            <Button onclick="createRoom()" type="text" danger>
                Create Room
            </Button>
        </div>
    )
}
