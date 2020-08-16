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
