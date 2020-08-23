import React from 'react';

import './style.css'


export default function EmbeddedVid(props) {

    return (
        <section className='embedded-vid-block'>
            <p className='embedded-vid-title'>
                {props.title}
            </p>
            <iframe
                className='embedded-vid-iframe'
                title={props.title}
                src={props.vidUrl}
                // frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </section>
    )
}
