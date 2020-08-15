import React from 'react'

export default function Card(props) {

    const dragStart = e => {
        const target = e.target;
        //the below reference to 'card_id' must be the same as referenced in the "board" component that holds draggable items
        e.dataTransfer.setData('card_id', target.id);
        //this 0 timeout creates an infinitesimal delay before 'taking' the badge from where it lay before
        setTimeout(()=> {
            target.style.display="0"
        }, 0);
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            >

            { props.children }

        </div>
    )
}
