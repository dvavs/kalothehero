import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'


export default function Footer(props) {

    return (
        <footer>
            <div id='footer'>
                <div id='foot-center'>
                    <p>
                        &#169;2020 <a href='https://www.kellylambertlab.com/'>Kelly Lambert</a>. All Rights Reserved.
                    </p>
                    <p>
                        <div id='km-tag'>Illustrations & resources: <a href='/'>Katie McBride</a></div><div id='tag-pipe'> | </div><div id='dv-tag'>Website designer: <a href='http://dylanvavra.com' className='foot-center-block'>Dylan Vavra</a></div>
                    </p>
                </div>
            </div>
        </footer>)
}