import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

import './style.css'

import challengeSignup from '../../assets/files/kalo-challenge-certificate.pdf'
import challengeChecklist from '../../assets/files/kalo-challenge-check-off.pdf'
import challengeDayCount from '../../assets/files/kalo-follow-counter.pdf'
import lookFwdDrawing from '../../assets/files/kalo-look-fwd-drawing.pdf'

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
                Track the steps you're taking with the <a href={challengeChecklist}
                    alt='challenge checklist'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='worksheet-link'>challenge checklist</a>.
                Encourage others around you to join in the effort!
            </p>
            <p>
                Share with others <a href={challengeDayCount}
                    alt='challenge day count'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='worksheet-link'>how long you've kept up the fight
                </a> and <a href={lookFwdDrawing}
                    alt='challenge day count'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='worksheet-link'>what you're looking forward to
                </a> after the pandemic with Kalo's coloring pages!
            </p>
            <p>
                Keep checking in with Kalo to see what new challenges arise and how you can help!
            </p>
            <br />

        </main>
    );
}