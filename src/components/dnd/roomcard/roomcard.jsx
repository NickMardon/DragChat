import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../../utils/items'
import './roomcardstyle.css'

export default function RoomCard(props) {
    // we must declare our draggable component inside the function of the thing to be dragged itself! this hook comes from rdnd, so be sure to import when using
    const[ { isDragging }, drag ] = useDrag({

        item: {
            type: ItemTypes.CARD,
        },
        collect: monitor => ({
            //now that the monitor is watching for dragging, if it isDragging, this will add an "isdragging" prop to our dragging props.
            isDragging: !!monitor.isDragging()
        })
    })

    // 

    //the video example does some neat stuff in the below render with a color coded badge based on the category, we could do one for connection status
    return (
        <div 
        className={`roomCard + ${isDragging ? 'dragging':''}`}
        
        ref={drag}>
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






