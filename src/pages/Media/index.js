import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

export default function Media(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='media'>
            <h1>Social Media</h1>
            <p>Follow Kalo on <a href='https://www.facebook.com/Kalo-the-Hero-626785261278776'>Facebook</a>!</p>
            <br />
            <h1>Media Highlights</h1>
            <p>
                Coming soon!
            </p>
        </main>
    );
}