import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../../utils/items'


export default function RoomCard(props) {
    // we must declare our draggable component inside the function of the thing to be dragged itself! this hook comes from rdnd, so be sure to import when using
    const[] = useDrag({

        item: {
            type: ItemTypes.CARD
        },
    
    })

    const style={
        width:'95%',
        height: '150px',
        margin: '10px 10px',
        backgroundColor: '#48b570',
        fontSize: '15px',
        fontWeight: 'bold',
        overflow: 'auto'

    }

    //the video example does some neat stuff in the below render with a color coded badge based on the category, we could do one for connection status
    return (
        <div style={style}>
           <ul>
               <li>
                   {props.name}
               </li>
               <li>
                   {props.jitsiName}
               </li>
               <li>
                -- 🍖 🎪
               </li>
               <li>
                {props.description}
               </li>
           </ul> 
        </div>
    )
}
