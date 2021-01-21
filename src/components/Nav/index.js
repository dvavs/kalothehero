import React from 'react';
import { Link } from 'react-router-dom';

import { PageCtx } from '../../utils/PageCtx'

import './style.css'

import kalobanner from '../../assets/images/kalo-web-header_200x700.png'

function Nav(props) {

    const { page } = React.useContext(PageCtx)

    Nav.closeDdNav = () => {
        props.closeDdNav()
    }

    const closeDdNav = () => {
        props.closeDdNav()
    }

    const toggleNav = () => {
        props.toggleNav()
    }

    return (
        <nav>
            <div id='nav-full'>
                <div className='nav-left'>
                    <Link to='/'><img src={kalobanner} alt='kalo' id='kalo-header' /></Link>
                </div>
                <div className='nav-center'>
                    <Link to='/about' className='nav-block'>
                        <div className={page === `about` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>About Kalo</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                    <div className='nav-center-break' />
                    <Link to='/contest' className='nav-block'>
                        <div className={page === `contest` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>Contest</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                    <div className='nav-center-break' />
                    <Link to='/resources' className='nav-block'>
                        <div className={page === `resources` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>Resources</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                    <div className='nav-center-break' />
                    <Link to='/klassroom' className='nav-block'>
                        <div className={page === `klassroom` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>Kalo's Klassroom</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                    <div className='nav-center-break' />
                    <Link to='/media' className='nav-block'>
                        <div className={page === `media` ? 'nav-btn-active' : 'nav-btn'}>
                            <p>Media</p>
                            <div className='nav-btn-line' />
                        </div>
                    </Link>
                </div>
                <div className='nav-right'>
                    <a href='https://www.facebook.com/KaloTheHero/' className='nav-block'>
                        <i className='fab fa-facebook-square nav-btn' id='fbook-icon'></i>
                    </a>
                </div>
            </div>
            <div id='nav-collapsable'>
                <div id='nav-collapse-bar'>
                    <div className='nav-left'>
                        <Link to='/'><img src={kalobanner} alt='kalo' id='kalo-collapse-header' /></Link>
                    </div>
                    <div className='nav-center'></div>
                    <div className='nav-right'>
                        <a href='https://www.facebook.com/KaloTheHero/' className='nav-block' id='fbook-link'>
                            <i className='fab fa-facebook-square nav-btn' id='fbook-icon'></i>
                        </a>
                        <button id='nav-menu-toggle-btn' onClick={toggleNav}>
                            <i className={props.ddOpen ? 'fa fa-angle-double-up nav-btn' : 'fa fa-angle-double-down nav-btn'} id='nav-collapse-icon'></i>
                        </button>
                    </div>
                </div>
                <div id='nav-collapse-menu'>
                    <ul id={props.ddOpen ? 'nav-visible-ul' : 'nav-collapsed-ul'}>
                        <li>
                            <Link to='/about' className='nav-block' onClick={closeDdNav} id='about-top-nav-dd-btn'>
                                <div className={page === `about` ? 'nav-btn-active' : 'nav-btn'}>
                                    <p>About Kalo</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contest' className='nav-block' onClick={closeDdNav}>
                                <div className={page === `contest` ? 'nav-btn-active' : 'nav-btn'}>
                                    <p>Contest</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/resources' className='nav-block' onClick={closeDdNav}>
                                <div className={page === `resources` ? 'nav-btn-active' : 'nav-btn'}>
                                    <p>Resources</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/klassroom' className='nav-block' onClick={closeDdNav}>
                                <div className={page === `klassroom` ? 'nav-btn-active' : 'nav-btn'}>
                                    <p>Kalo's Klassroom</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/media' className='nav-block' onClick={closeDdNav}>
                                <div className={page === `media` ? 'nav-btn-active' : 'nav-btn'}>
                                    <p>Media</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >)
}

export default Nav