import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './style.css'

const enCopyTxt = 'Your name:\n\nYour age and grade:\n\nName and address of your school (or educational setting):\n\nParent or Guardian name and email address (where you can be reached):\n\nIf selected, do we have permission to use submitted images on the Kalo the Hero website and related media to promote Kalo’s recommendations for healthy COVID behaviors?\n\nDon\'t forget to attach your pictures!'
const arCopyTxt = '١-الاسم الكامل\n\n٢-العمر والصف\n\n٣-اسم وعنوان مدرستكم\n\n٤-اسم الاهل او الوصي القانوني وبريدهم الالكتروني\n\n٥-إذا تم اختيار مشاركتكم، هل تسمحون لنا بوضع صوركم على الموقع؟\n\n٦-لا تنسوا ارفاق الصور!'

class EmailTemplate extends React.Component {

    state = {
        lang: this.props.lang,
        value: '',
        copied: false,
    };

    render() {

        const { t, i18n } = this.props;

        return (
            <div id='email-template'>
                <CopyToClipboard text={this.state.lang === 'en' ? enCopyTxt : arCopyTxt}
                    onCopy={() => this.setState({ copied: true })}>
                    <button id='btn-copypasta'><i className={this.state.copied ? 'fas fa-copy' : 'far fa-copy'} /></button>
                </CopyToClipboard >
                { this.state.copied ? <span style={{ color: 'red' }}>{t('Copied.')}</span> : null}
                <p>{t('Information Needed')}</p>
                <section id='copypasta-preview'>
                    <p>
                        {t('Your name -')}
                            </p>
                    <p>
                        {t('Your age and grade -')}
                            </p>
                    <p>
                        {t('Name and address of your school (or educational setting) -')}
                            </p>
                    <p>
                        {t('Parent or Guardian name and email address (where you can be reached) -')}
                            </p>
                    <p>
                        {t('If selected, do we have permission to use submitted images on the Kalo the Hero website and related media to promote Kalo\'s recommendations for healthy COVID behaviors?')}
                            </p>
                    <p>
                        {t('Don\'t forget to attach your pictures!')}
                    </p>
                </section>
            </div >
        );
    }
};

export default EmailTemplate