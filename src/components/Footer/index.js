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
                        Illustrations & resources: <a href='/'>Katie McBride</a> | Website designer: <a href='http://dylanvavra.com' className='foot-center-block'>Dylan Vavra</a>
                    </p>
                </div>
            </div>
        </footer>)
}