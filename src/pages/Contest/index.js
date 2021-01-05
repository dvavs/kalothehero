import React from 'react';

import { PageCtx } from '../../utils/PageCtx'
import HelmetMetaData from '../../components/HelmetMetaData'

import { Container, Row, Col } from '../../components/Grid'
import ResponsiveImage from '../../components/ResponsiveImg'
import EmailTemplate from '../../components/EmailTemplate'

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";

import './style.css'

import lookFwd from '../../assets/files/kalo-activity-look-fwd'
import tgPortrait from '../../assets/images/contest/grandin'
import kaloPortrait from '../../assets/images/contest/kalo'


export default function About(props) {

    const shareUrl = 'https://www.kalothehero.com/contest'

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='contest'>
            <HelmetMetaData
                description={'Kalo the Raccoon is looking forward to getting the vaccine and seeing life go back to normal.' +
                    'After all, anticipating fun events is good for our brain!' +
                    'Help Kalo get ideas by entering the Kalo’s Plan Contest with your creative poem or picture and you’ll have a chance to win books for your class!'}
                title='What are you looking forward to doing when things get back to normal after the Pandemic?'
            />
            <Container fluid>
                <Row id='contest-title'>
                    <Col size='12'>
                        <h1>Post-Pandemic Plans</h1>
                    </Col>
                </Row>
                <Row id='contest-desc'>
                    <Col size='12'>
                        <p>
                            What are you looking forward to doing when things get back to normal after the Pandemic?
                        </p>
                        <p>
                            Fill in Kalo’s thought bubble with either a picture or poem and submit it to Kalo's contest!
                            </p>
                        <p>
                            You could win a $300 gift card for your class or educational group to purchase books for fun reading until life returns to normal.
                            </p>
                        <p>
                            The wonderful Dr. Temple Grandin will facilitate judging the entries and will present the award via Zoom to your class in February.
                            </p>
                        <p>
                            There are two age groups: 6-8 years old and 9-11 years old.
                            </p>
                        <p>
                            <b>Send us your ideas by January 25!</b>
                        </p>
                    </Col>
                </Row>
                {/* <ContestMediaGrid judge='tg'/> */}
                <Row id='contest-desc-media-top'>
                    <Col size='md-2' className='desc-media-lg-buffer' />
                    <Col size='md-8' id='desc-media-lg'>
                        <ResponsiveImage
                            desc={lookFwd.desc}
                            default={lookFwd.full}
                            isLink={true}
                            target={lookFwd.full}
                            imgSet={lookFwd.imgSet}
                        />
                        <sub id='rsrc-sub'>Click the thumbnail above for full-size.</sub>
                    </Col>
                    <Col size='md-2' className='desc-media-lg-buffer' />
                </Row>
                <Row id='contest-desc-media-bottom'>
                    <Col size='md-1' />
                    <Col size='md-5 6' id='desc-media-sm-left'>
                        <ResponsiveImage
                            desc={kaloPortrait.desc}
                            default={kaloPortrait.full}
                            isLink={false}
                            imgSet={kaloPortrait.imgSet}
                        />
                        <sub id='rsrc-sub'>{kaloPortrait.desc}</sub>
                    </Col>
                    <Col size='md-5 6' id='desc-media-sm-right'>
                        <ResponsiveImage
                            desc={tgPortrait.desc}
                            default={tgPortrait.full}
                            isLink={true}
                            target='https://www.templegrandin.com/'
                            imgSet={tgPortrait.imgSet}
                        />
                        <sub id='rsrc-sub'>{tgPortrait.desc}</sub>
                    </Col>
                    <Col size='md-1' />
                </Row>
                <hr className='row-buffer' />
                <Row>
                    <Col size='12' id='contest-instructs'>
                        <h3>
                            How do you enter the contest?
                        </h3>
                        <p>
                            You may need a grown-up to help.
                        </p>
                        <section id='instruct-steps'>
                            <p>
                                1. Print the cartoon page and draw a picture, or write a poem in the thought bubble to share your plans.
                                </p>
                            <p>
                                2. Take a picture of your submission.
                                </p>
                            <p>
                                3. Take a picture of you holding your Kalo cartoon project.
                                </p>
                            <p>
                                4. Copy the questions below, and paste into an email with "Kalo Contest!" as the subject line.
                                </p>
                            <p>
                                5. Answer the questions, attach your pictures, and send it to <a href='mailto:contest@kalothehero.com'>contest@kalothehero.com</a>!
                                </p>
                            <p>
                                6. Encourage your friends to join the competition!
                                <br />
                                <FacebookShareButton
                                    // quote='Kalo the Raccoon wants to hear about your post-pandemic plans!'
                                    // hashtag='#kalotheraccoon'
                                    url={shareUrl}>
                                    <i className='fab fa-facebook-square social-share-icon' />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    // title='Kalo the Raccoon wants to hear about your post-pandemic plans!'
                                    // hashtags={['kalotheraccoon', 'postpandemic', 'covid19']}
                                    url={shareUrl}>
                                    <i className='fab fa-twitter-square social-share-icon' />
                                </TwitterShareButton>
                                <WhatsappShareButton
                                    // title='Kalo the Raccoon wants to hear about your post-pandemic plans!'
                                    url={shareUrl}>
                                    <i className='fab fa-whatsapp-square social-share-icon' />
                                </WhatsappShareButton>
                            </p>
                        </section>
                    </Col>
                </Row>
                <hr className='row-buffer' />
                <Row>
                    <Col size='12'>
                        <EmailTemplate />
                    </Col>
                </Row>
                <hr className='row-buffer' />
                <Row>
                    <Col size='12'>
                        <p>
                            Questions related to the contest should be directed to:
                            <br />
                            <a href='mailto:contest@kalothehero.com'>contest@kalothehero.com</a>
                        </p>
                    </Col>
                </Row>
            </Container >

        </main >
    );
}