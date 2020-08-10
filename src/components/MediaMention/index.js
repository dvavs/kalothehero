import React from 'react';

import './style.css'


export default function MediaMention(props) {

    const imgAlt = `${props.outlet} article, ${props.publishDate}`

    return (
        <section className='media-mention'>
            <div className='media-mention-header'>
                <p className='media-title-link'>
                    {props.outlet} - <a href={props.url} alt={imgAlt}
                        rel='noopener noreferrer'
                        target='_blank'
                        className='media-link'>
                        {props.title}
                    </a>
                </p>
                <p className='auth-line'>{props.author}, {props.publishDate}</p>
            </div>
            <img className='media-scrnsht' src={props.screenshot} alt={imgAlt}></img>

        </section>
    )
}