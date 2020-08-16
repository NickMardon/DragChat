import React from 'react'
import './dropzone.css';

export default function Dropzone(props) {
    return (
        <div className='dropZone'>
            { props.children }
        </div>
    )
}
