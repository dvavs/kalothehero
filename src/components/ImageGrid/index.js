import React from 'react';

import { Container, Row, Col } from '../Grid'
import ImageCard from '../ImageCard'

// import thumbsList from '../../assets/images/thumbs.json'

import followThumb from '../../assets/images/300x/kalo-intro-300x300.jpg'
import followImg from '../../assets/images/fullsize/kalo-intro.jpg'

import washThumb from '../../assets/images/300x/kalo-wash-hands-300x300.jpg'
import washImg from '../../assets/images/fullsize/kalo-wash-hands.jpg'

import maskThumb from '../../assets/images/300x/kalo-wear-mask-300x300.jpg'
import maskImg from '../../assets/images/fullsize/kalo-wear-mask.jpg'

import distanceThumb from '../../assets/images/300x/kalo-physical-distance-300x300.jpg'
import distanceImg from '../../assets/images/fullsize/kalo-physical-distance.jpg'

import horizontalThumb from '../../assets/images/poster-thumbs/kalo-horizontal-all-480x270.jpg'
import horizontalFull from '../../assets/images/fullsize/kalo-horizontal-all.jpg'
import verticalThumb from '../../assets/images/poster-thumbs/kalo-vertical-all-480x349.jpg'
import verticalFull from '../../assets/images/fullsize/kalo-vertical-all.pdf'

class ImgGrid extends React.Component {

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col size='md'>
                        <ImageCard className='partial-poster' imgPath={followImg} thumbPath={followThumb} imgDesc='follow Kalo illustration' />
                    </Col>
                    <Col size='md'>
                        <ImageCard className='partial-poster' imgPath={washImg} thumbPath={washThumb} imgDesc='wash your hands illustration' />
                    </Col>
                </Row>
                <Row>
                <Col size='md'>
                        <ImageCard className='partial-poster' imgPath={maskImg} thumbPath={maskThumb} imgDesc='wear a mask illustration' />
                    </Col>
                    <Col size='md'>
                        <ImageCard className='partial-poster' imgPath={distanceImg} thumbPath={distanceThumb} imgDesc='physical distance illustration' />
                    </Col>
                </Row>
                <Row>
                    <Col size='md-6'>
                        <ImageCard id='horizontal-full-thumb' imgPath={horizontalFull} thumbPath={horizontalThumb} imgDesc='full Kalo challenge poster landscape orientation' />
                    </Col>
                    <Col size='md-6'>
                        <ImageCard id='vertical-full-thumb' imgPath={verticalFull} thumbPath={verticalThumb} imgDesc='full Kalo challenge poster portrait orientation' />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default ImgGrid