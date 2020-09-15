import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

import { Container, Row, Col } from '../../components/Grid'
import ResponsiveImage from '../../components/ResponsiveImg'

import './style.css'

import challengeSignup from '../../assets/files/kalo-challenge-certificate.pdf'
import challengeChecklist from '../../assets/files/kalo-challenge-check-off.pdf'
import dayCount from '../../assets/files/kalo-activity-days'
import lookFwd from '../../assets/files/kalo-activity-look-fwd'

export default function Klassroom(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='klassroom'>
            <Container fluid>
                <Row>
                    <Col size='12'>
                        <section className='klassroom-txt'>
                            <h1>Take the Challenge!</h1>
                            <p>
                                Sign the <a href={challengeSignup}
                                    alt='challenge certificate'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='worksheet-link'>challenge pledge</a> to help Kalo fight COVID-19!
                        </p>
                            <p>
                                Engage in recommended behaviors to help keep yourself and those around you safe!
                            Track the steps you're taking with the <a href={challengeChecklist}
                                    alt='challenge checklist'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='worksheet-link'>challenge checklist</a>.
                            Encourage others around you to join in the effort!
                        </p>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col size='12'>
                        <section className='klassroom-txt'>
                            <h1 id='rsrc-title'>Share with Others!</h1>
                            <sub id='rsrc-title-sub'>Click the thumbnails below for full-size images.</sub>
                            <p>
                                Share with others how long you've kept up the fight and what you're looking forward to after the pandemic with Kalo's coloring pages!
                                Check the resources page for images you can share on social media!
                        </p>
                        </section>
                    </Col>
                </Row>
                <Row id='sm-rsrc-set'>
                    <Col size='md-6' id='sm-rsrc-left'>
                        <ResponsiveImage
                            desc={dayCount.desc}
                            default={dayCount.full}
                            isLink={true}
                            target={dayCount.full}
                            imgSet={dayCount.imgSet}
                        />
                    </Col>
                    <Col size='md-6' id='sm-rsrc-right'>
                        <ResponsiveImage
                            desc={lookFwd.desc}
                            default={lookFwd.full}
                            isLink={true}
                            target={lookFwd.full}
                            imgSet={lookFwd.imgSet}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size='12'>
                        <section className='klassroom-txt'>
                            <h3>Keep checking in with Kalo to see what new challenges arise and how you can help!</h3>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}