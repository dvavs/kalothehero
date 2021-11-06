import React from 'react';

import EmbeddedVideo from '../../components/EmbeddedVid'

import { PageCtx } from '../../utils/PageCtx'

import './style.css'

export default function Contest(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='contest'>
            <h1>Kalo's Post-Pandemic Plans Contest</h1>
            <p>
                Thanks to all who participated in Kalo's contest!
            </p>
            <p>
                We loved hearing, reading, and seeing pictures of your post-pandemic plans.
            </p>
            <p>
                Congratulations to the winners, who were announced by Drs. Lambert and Grandin on YouTube.
            </p>
            <div className='row-buffer' />
            <EmbeddedVideo
                vidUrl='https://www.youtube.com/embed/MrBx4qyO7DM'
            />
        </main>
    );
}
