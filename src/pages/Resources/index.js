import React from 'react';

import { PageCtx } from '../../utils/PageCtx'
import ImgGrid from '../../components/ImageGrid'

import './style.css'

import challengeSignup from '../../assets/files/kalo-challenge_certificate.pdf'
import challengeChecklist from '../../assets/files/kalo-challenge_check-off.pdf'

export default function Resources(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='resources'>
            <h1>Resources</h1>
            <h3>Worksheets</h3>
            <p>Click the links below for printable forms to track your progress on the Kalo challenge!</p>
            <p>
                <a href={challengeSignup} alt='challenge certificate' rel='noopener noreferrer' target='_blank' className='worksheet-link'>Challenge certificate</a>
                <br />
                <a href={challengeChecklist} alt='challenge checklist' rel='noopener noreferrer' target='_blank' className='worksheet-link'>Challenge checklist</a>
            </p>
            <br />
            <h3>Printable Illustrations and Posters</h3>
            <p>Click the thumbnails below for full-size images.</p>
            <ImgGrid />
        </main>
    );
}