import { Button } from 'antd';
import React from 'react'

export default function Buttons() {
    return (
        <div>
            <Button onClick="createRoom()" type="text" danger>
                Temp Button
            </Button>
        </div>
    )
}
