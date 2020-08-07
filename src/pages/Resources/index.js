import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

import { Container, Row, Col } from '../../components/Grid'
import ResponsiveImage from '../../components/ResponsiveImg'

import './style.css'

const poster = require('../../assets/media/print/challenge-poster')

const social = require('../../assets/media/social')


export default function Resources(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='resources'>
            <Container fluid>
                <Row id='title-row'>
                    <Col id='title-col' size='12'>
                        <h1 id='rsrc-title' className='pg-title'>Resources</h1>
                        <sub id='rsrc-title-sub'>Click the thumbnails below for full-size images.</sub>
                    </Col>
                </Row>
                <Row id='lg-rsrc-set'>
                    <Col size='lg-6'>
                        <h3>Printable Poster</h3>
                        <ResponsiveImage
                            desc={poster.desc}
                            default={poster.full}
                            isLink={true}
                            target={poster.full}
                            imgSet={poster.imgSet}
                        />
                    </Col>
                    <Col size='lg-6'>
                        <h3>Digital Banner</h3>
                        <ResponsiveImage
                            desc={social.banner.desc}
                            default={social.banner.full}
                            isLink={true}
                            target={social.banner.full}
                            imgSet={social.banner.imgSet}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size='12'>
                        <h3>Shareable Digital Resources</h3>
                    </Col>
                </Row>
                <Row id='sm-rsrc-set'>
                    <Col size='md-6' id='sm-rsrc-left'>
                        <ResponsiveImage
                            desc={social.follow.desc}
                            default={social.follow.full}
                            isLink={true}
                            target={social.follow.full}
                            imgSet={social.follow.imgSet}
                        />
                        <ResponsiveImage
                            desc={social.physDist.desc}
                            default={social.physDist.full}
                            isLink={true}
                            target={social.physDist.full}
                            imgSet={social.physDist.imgSet}
                        />
                    </Col>
                    <Col size='md-6' id='sm-rsrc-right'>
                        <ResponsiveImage
                            desc={social.washHands.desc}
                            default={social.washHands.full}
                            isLink={true}
                            target={social.washHands.full}
                            imgSet={social.washHands.imgSet}
                        />
                        <ResponsiveImage
                            desc={social.wearMask.desc}
                            default={social.wearMask.full}
                            isLink={true}
                            target={social.wearMask.full}
                            imgSet={social.wearMask.imgSet}
                        />
                    </Col>
                </Row>
                <section>

                </section>

            </Container>
        </main>
    );
}