import React from 'react'

export default function RoomCard(props) {

    const style={
        width:'100px',
        height: '85px',
        margin: '10 10',
        backgroundColor: '#48b570',
        fontSize: '20px',
        fontWeight: 'bold',

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
