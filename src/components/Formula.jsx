import React from 'react'

export default function Formula({ blocks }) {
    return (
        <div className='block_example'>
            <i className={blocks.logo}></i>
            <h2> {blocks.title} </h2>
            <p>{blocks.text}</p>
        </div>
    )
}
