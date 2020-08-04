import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

import './style.css'

export default function Challenge(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='challenge'>
            <h1>Take the Challenge!</h1>
            <p>
                Sign the pledge to help Kalo fight COVID-19!
            </p>
            <p>
                Engage in recommended behaviors to help keep yourself and those around you safe! Keep track of your progress with the checklist. Encourage others around you to join in the effort!
            </p>
            <p>
                Keep checking in with Kalo to see what new challenges arise and how you can help!
            </p>
            <br />
            <aside>
                Pledges and checklists can be found under the resources tab.
            </aside>

        </main>
    );
}