import React from 'react';

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
                        <span id='km-tag'>Illustrations & resources: <a href='/'>Katie McBride</a></span><span id='tag-pipe'> | </span><span id='dv-tag'>Website designer: <a href='https://www.linkedin.com/in/vavrad' className='foot-center-block'>Dylan Vavra</a></span>
                    </p>
                </div>
            </div>
        </footer>)
}