import React from 'react';
import { Link } from 'react-router-dom';

import { PageCtx } from '../../utils/PageCtx'

import './style.css'

import kalo from '../../assets/images/kalo-mask-closeup.jpg'

export default function Nav(props) {
    const { page } = React.useContext(PageCtx)

    return (
        <nav>
            <div id='nav'>
                <div id='nav-left'>
                    <Link to='/'><img src={kalo} alt='kalo' /></Link>
                </div>
                <div id='nav-center'>
                    <Link to='/about' className='nav-center-block'>
                        <div className={page === `about` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>About Kalo</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                    <div className='nav-center-break' />
                    <Link to='/resources' className='nav-center-block'>
                        <div className={page === `resources` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>Resources</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                    <div className='nav-center-break' />
                    <Link to='/challenge' className='nav-center-block'>
                        <div className={page === `challenge` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>Take the Challenge!</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                    <div className='nav-center-break' />
                    <Link to='/media' className='nav-center-block'>
                        <div className={page === `media` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>Media</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                </div>
                <div id='nav-right'>
                    <Link to='/' className='nav-center-block'>
                        <div className={page === `home` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>Home</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>)
}