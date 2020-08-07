import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

import './style.css'

import kalo from '../../assets/media/social/kalo-follow.jpg'

export default function Home(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='home'>
            <img src={kalo} alt='Kalo the hero' id='kalo-home-img'/>
        </main>
    );
}