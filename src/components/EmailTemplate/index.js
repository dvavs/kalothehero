import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './style.css'

class EmailTemplate extends React.Component {

    state = {
        value: '',
        copied: false,
    };

    render() {
        return (
            <div id='email-template'>
                <CopyToClipboard text={'1. Your name:\n\n2. Your age and grade:\n\n3. Name and address of your school (or educational setting):\n\n4. Parent or Guardian name and email address (where you can be reached):\n\n5. If selected, do we have permission to use submitted images on the Kalo the Hero website and related media to promote Kalo’s recommendations for healthy COVID behaviors?\n\nDon\'t forget to attach your pictures!'}
                    onCopy={() => this.setState({ copied: true })
                    }>
                    <button id='btn-copypasta'><i class={this.state.copied ? 'fas fa-copy' : 'far fa-copy'} /></button>
                </CopyToClipboard >
                { this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                <br />
                <br />
                <section id='copypasta-preview'>
                    <p>
                        1. Your name:
                            </p>
                    <p>
                        2. Your age and grade:
                            </p>
                    <p>
                        3. Name and address of your school (or educational setting):
                            </p>
                    <p>
                        4. Parent or Guardian name and email address (where you can be reached):
                            </p>
                    <p>
                        5. If selected, do we have permission to use submitted images on the Kalo the Hero website and related media to promote Kalo’s recommendations for healthy COVID behaviors?
                            </p>
                    <p>
                        Don't forget to attach your pictures!
                    </p>
                </section>
            </div >
        );
    }
};

export default EmailTemplate