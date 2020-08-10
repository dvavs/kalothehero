import React from 'react';

import { PageCtx } from '../../utils/PageCtx'
import MediaMention from '../../components/MediaMention'

import sciAmScreenshot from '../../assets/images/scientific-american.jpg'

export default function Media(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='media'>
            <h1>Media Highlights</h1>
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