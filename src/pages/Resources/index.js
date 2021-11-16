import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

import { Container, Row, Col } from '../../components/Grid'
import ResponsiveImage from '../../components/ResponsiveImg'

import './style.css'

const challengePoster = require('../../assets/media/print/challenge-poster')
const vaccPoster = require('../../assets/media/print/vacc-poster')
const weCanDoItPoster = require('../../assets/media/print/kalo-we-can-do-it')

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
                <Row>
                    <Col size='12'>
                        <h3>Shareable Digital Resources</h3>
                    </Col>
                </Row>
                <Row id='sm-rsrc-set'>
                    <Col size='md-6' className='sm-rsrc-left'>
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
                    <Col size='md-6' className='sm-rsrc-right'>
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
                <Row id='lg-banner-row'>
                    <Col size='12'>
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
                        <h3>Printable Posters</h3>
                    </Col>
                </Row>
                <Row id='lg-poster-row-1' className='lg-poster-row'>
                    <Col size='md-6' className='sm-rsrc-left'>
                        <ResponsiveImage
                            desc={challengePoster.desc}
                            default={challengePoster.h960w621}
                            isLink={true}
                            target={challengePoster.full}
                            imgSet={challengePoster.imgSet}
                        />
                    </Col>
                    <Col size='md-6' className='sm-rsrc-right'>
                        <ResponsiveImage
                            desc={vaccPoster.desc}
                            default={vaccPoster.h960w621}
                            isLink={true}
                            target={vaccPoster.full}
                            imgSet={vaccPoster.imgSet}
                        />
                    </Col>
                </Row>
                <Row id='lg-poster-row-2' className='lg-poster-row'>
                <Col size='12'>
                        <ResponsiveImage
                            desc={weCanDoItPoster.desc}
                            default={weCanDoItPoster.h960w621}
                            isLink={true}
                            target={weCanDoItPoster.full}
                            imgSet={weCanDoItPoster.imgSet}
                        />
                    </Col>
                </Row>
            </Container>
        </main>
    );
}