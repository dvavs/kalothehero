import React from 'react';

import { PageCtx } from '../../utils/PageCtx'
import MediaMention from '../../components/MediaMention'
import EmbeddedVideo from '../../components/EmbeddedVid'

import sciAmScreenshot from '../../assets/images/scientific-american.jpg'
import urNow_9_7_20 from '../../assets/images/URNow_9-7-20.png'
import kalo_wapo from '../../assets/images/kalo_wapo.png'

import './style.css'

export default function Media(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='media'>
            <h1>Media Highlights</h1>
            <MediaMention
                url='https://www.washingtonpost.com/health/covid-mascot-kids-vaccination/2021/11/12/e484df08-3cc0-11ec-8ee9-4f14a26749d1_story.html'
                title='Could Kalo become the Smokey Bear-type mascot for pandemic hygiene?'
                outlet='Washington Post'
                author='Katherine Ellison'
                publishDate='11/13/2021'
                screenshot={kalo_wapo}
            />
            <EmbeddedVideo
                vidUrl='https://www.youtube.com/embed/MrBx4qyO7DM'
                title='Kalo Contest Award Announcement - YouTube'
            />
            <hr className='media-buffer' />
            <MediaMention
                url='https://www.scientificamerican.com/article/can-a-cartoon-raccoon-keep-schoolkids-safe-from-covid-19/'
                title="Professor creates cartoon character to encourage kids' safety during pandemic"
                outlet='UR Now'
                author='University of Richmond'
                publishDate='9/7/2020'
                screenshot={urNow_9_7_20}
            />
            <hr className='media-buffer' />
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