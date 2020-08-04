import React from 'react';
import { Link } from 'react-router-dom';

import { PageCtx } from '../../utils/PageCtx';

export default function NotFound(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='home'>
            <h1>404 - Not Found</h1>
            <p>
                The page you're looking for does not exist.
            </p>
            <Link to='/'>
                <p>Return to the homepage.</p>
            </Link>
        </main>
    );
}