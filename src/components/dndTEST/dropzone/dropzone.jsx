import React, { useContext } from 'react'
import './dropzone.css';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../../utils/items';
import { RoomContext } from '../rooms/rooms';

export default function Dropzone(props) {

    const { markAsConnected } = useContext(RoomContext)

    const[{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => markAsConnected(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })



    return (
        <div 
        ref={drop}
        className={`dropZone + ${isOver ? 'isOver':''}`}
        >
            { props.children }
        </div>
    )
}
