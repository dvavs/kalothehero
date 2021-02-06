import React from 'react';

import { withCtx } from '../../utils/PageCtx'
import { withTranslation } from "react-i18next";

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
import lookFwdAr from '../../assets/files/kalo-activity-look-fwd-ar'
import tgPortrait from '../../assets/images/contest/grandin'
import rdPortrait from '../../assets/images/contest/dajani'
import kaloPortrait from '../../assets/images/contest/kalo'



class Contest extends React.Component {

    state = {
        lang: this.props.i18n.language === 'ar' ? 'ar' : 'en',
        t: this.props.t,
        i18n: this.props.i18n
    };

    handleChange = event => {
        console.log("selected language is ", event.target.value);
        let newlang = event.target.value;
        this.setState(prevState => ({ lang: newlang }));
        this.props.i18n.changeLanguage(newlang);
    };

    render() {

        const shareUrl = 'https://www.kalothehero.com/contest'

        return (
            <main id='contest'>
                <Container fluid>
                    <Row id='lang-select'>
                        <Col size='12'>
                            <div id='lang-select-btns'>
                                <button
                                    id={this.state.lang === 'en' ? 'selected' : 'unselected'}
                                    value="en"
                                    onClick={this.handleChange}>
                                    English الإنجليزية
                                    </button>
                                <button
                                    id={this.state.lang === 'ar' ? 'selected' : 'unselected'}
                                    value="ar"
                                    onClick={this.handleChange}>
                                    عربى Arabic
                                    </button>
                            </div>
                        </Col>
                    </Row>
                    <Row id='contest-title'>
                        <Col size='12'>
                            <h1>{this.state.t('Post-Pandemic Plans')}</h1>
                        </Col>
                    </Row>
                    <Row id='contest-desc'>
                        <Col size='12'>
                            <p>
                                {this.state.t('What are you looking forward to doing when things get back to normal after the Pandemic?')}
                            </p>
                            <p>
                                {this.state.t('Fill in Kalo’s thought bubble with either a picture or poem and submit it to Kalo\'s contest!')}
                            </p>
                            <p>
                                {this.state.t('You could win a $300 gift card for your class or educational group to purchase books for fun reading until life returns to normal.')}
                            </p>
                            <p>
                                {this.state.t('Dr. Temple Grandin will facilitate judging the entries and will present the award via Zoom to your class in February.')}
                            </p>
                            <p>
                                {this.state.t('There are two age groups - 6-8 years old and 9-11 years old.')}
                            </p>
                            <p>
                                <b>{this.state.t('Send us your ideas by Februay 26!')}</b>
                            </p>
                        </Col>
                    </Row>
                    {/* <ContestMediaGrid judge='tg'/> */}
                    <Row id='contest-desc-media-top'>
                        <Col size='md-2' className='desc-media-lg-buffer' />
                        <Col size='md-8' id='desc-media-lg'>
                            {this.state.lang === 'en' ?
                                <ResponsiveImage
                                    desc={lookFwd.desc}
                                    default={lookFwd.h960w621}
                                    isLink={true}
                                    target={lookFwd.full}
                                    imgSet={lookFwd.imgSet}
                                />
                                :
                                <ResponsiveImage
                                    desc={lookFwdAr.desc}
                                    default={lookFwdAr.h960w621}
                                    isLink={true}
                                    target={lookFwdAr.full}
                                    imgSet={lookFwdAr.imgSet}
                                />}
                            <sub id='rsrc-sub'>{this.state.t('Click the thumbnail above for full-size.')}</sub>
                        </Col>
                        <Col size='md-2' className='desc-media-lg-buffer' />
                    </Row>
                    <Row id='contest-desc-media-bottom'>
                        <Col size='md-1' />
                        <Col size='md-5 6' id='desc-media-sm-left'>
                            <ResponsiveImage
                                desc={this.state.t('Kalo the Raccoon')}
                                default={kaloPortrait.full}
                                isLink={false}
                                imgSet={kaloPortrait.imgSet}
                            />
                            <sub id='rsrc-sub'>{this.state.t('Kalo the Raccoon')}</sub>
                        </Col>
                        <Col size='md-5 6' id='desc-media-sm-right'>
                            {this.state.lang === 'en' ?
                                <ResponsiveImage
                                    desc={tgPortrait.desc}
                                    default={tgPortrait.full}
                                    isLink={true}
                                    target={'https://www.templegrandin.com/'}
                                    imgSet={tgPortrait.imgSet}
                                />
                                :
                                <ResponsiveImage
                                    id='rd-portrait'
                                    desc={this.state.t('Dr. Rana Dajani')}
                                    default={rdPortrait.full}
                                    isLink={true}
                                    target={'https://jepson.richmond.edu/faculty/bios/rdajani/'}
                                    imgSet={rdPortrait.imgSet}
                                />
                            }
                            <sub id='rsrc-sub'>{this.state.t('Dr. Temple Grandin')}</sub>
                        </Col>
                        <Col size='md-1' />
                    </Row>
                    <hr className='row-buffer' />
                    <Row>
                        <Col size='12' id='contest-instructs'>
                            <p><b>{this.state.t('How do you enter the contest? You may need a grown-up to help.')}</b></p>
                            <section className={this.state.lang === 'ar' ? 'ar-txt' : 'en-txt'} id='instruct-steps'>
                                <p>
                                    {this.state.t('1. Print the cartoon page and draw a picture, or write a poem in the thought bubble to share your plans.')}
                                </p>
                                <p>
                                    {this.state.t('2. Take a picture of your submission.')}
                                </p>
                                <p>
                                    {this.state.t('3. Take a picture of you holding your Kalo cartoon project.')}
                                </p>
                                <p>
                                    {this.state.t('4. Copy the questions below, and paste into an email with "Kalo Contest!" as the subject line.')}
                                </p>
                                <p>
                                    {this.state.t('5. Answer the questions, attach your pictures, and send it to')}
                                    <br /><a href='mailto:contest@kalothehero.com'>contest@kalothehero.com</a>
                                </p>
                                <p>
                                    {this.state.t('6. Encourage your friends to join the competition!')}
                                    <br />
                                    <FacebookShareButton
                                        quote={this.state.t('Kalo the Raccoon wants to hear about your post-pandemic plans. Enter the contest to win!')}
                                        hashtag='#kalotheraccoon'
                                        url={shareUrl}>
                                        <i className='fab fa-facebook-square social-share-icon' />
                                    </FacebookShareButton>
                                    <TwitterShareButton
                                        title={this.state.t('Kalo the Raccoon wants to hear about your post-pandemic plans. Enter the contest to win!')}
                                        hashtags={['kalotheraccoon', 'postpandemic', 'covid19']}
                                        url={shareUrl}>
                                        <i className='fab fa-twitter-square social-share-icon' />
                                    </TwitterShareButton>
                                    <WhatsappShareButton
                                        title={this.state.t('Kalo the Raccoon wants to hear about your post-pandemic plans. Enter the contest to win!')}
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
                            <EmailTemplate {...this.state} />
                        </Col>
                    </Row>
                    <hr className='row-buffer' />
                    <Row>
                        <Col size='12'>
                            <p>
                                {this.state.t('Questions related to the contest should be directed to')}
                                <br />
                                <a href='mailto:contest@kalothehero.com'>contest@kalothehero.com</a>
                            </p>
                        </Col>
                    </Row>
                </Container >
            </main >
        );
    }
}

export default withTranslation("translations")(withCtx(Contest))