import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

import './style.css'

import challengeSignup from '../../assets/files/kalo-challenge_certificate.pdf'
import challengeChecklist from '../../assets/files/kalo-challenge_check-off.pdf'

export default function Challenge(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='challenge'>
            <h1>Take the Challenge!</h1>
            <p>
                Sign the <a href={challengeSignup}
                    alt='challenge certificate'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='worksheet-link'>challenge pledge</a> to help Kalo fight COVID-19!

            </p>
            <p>
                Engage in recommended behaviors to help keep yourself and those around you safe!
                Keep track of your progress with the <a href={challengeChecklist} alt='challenge checklist' rel='noopener noreferrer' target='_blank' className='worksheet-link'>challenge checklist</a>.
                Encourage others around you to join in the effort!
            </p>
            <p>
                Keep checking in with Kalo to see what new challenges arise and how you can help!
            </p>
            <br />

        </main>
    );
}