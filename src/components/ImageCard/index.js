import React from 'react';

import './style.css'

export default function Nav(props) {

    return (
        <div className='image-card'>
            <a href={props.imgPath} alt={props.imgDesc} rel='noopener noreferrer' target='_blank' className='fullsize-link'>
                <img src={props.thumbPath} alt={props.imgDesc} className='poster-thumb'/>
            </a>
        </div>
    );
}