import React from 'react';

import { PageCtx } from '../../utils/PageCtx'
import MediaMention from '../../components/MediaMention'
import EmbeddedVideo from '../../components/EmbeddedVid'

import sciAmScreenshot from '../../assets/images/scientific-american.jpg'

import './style.css'

export default function Media(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='media'>
            <h1>Media Highlights</h1>
        <EmbeddedVideo
            vidUrl='https://www.youtube.com/embed/ICs_HzgcdUU'
            title='Healthy COVID Behaviors and Kids with Drs. Temple Grandin and Kelly Lambert - YouTube'
        />
        <hr className='media-buffer' />
        <MediaMention
            url='https://www.scientificamerican.com/article/can-a-cartoon-raccoon-keep-schoolkids-safe-from-covid-19/'
            title='Can a Cartoon Raccoon Keep Schoolkids Safe from COVID-19?'
            outlet='Scientific American'
            author='Dr. Kelly Lambert'
            publishDate='8/4/2020'
            screenshot={sciAmScreenshot}
        />
        </main>
    );
}