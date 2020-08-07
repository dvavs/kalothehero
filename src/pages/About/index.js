import React from 'react';

import { PageCtx } from '../../utils/PageCtx'

import './style.css'

import kglPortrait from '../../assets/images/kgl/kgl-portrait.png'
import kglSig from '../../assets/images/kgl/kgl-sig.png'
import kalo from '../../assets/images/kalo-large-transparent.png'

export default function About(props) {

    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });

    return (
        <main id='about'>
            <h1>Welcome to Kalo’s website!</h1>
            <img id='kgl-portrait' alt='Dr. Kelly Lambert' src={kglPortrait} />
            <p>
                I’m a behavioral neuroscience professor at the University of Richmond and enjoy investigating brains and behavior with my undergraduate students.  Similar to so many others, I am incredibly frustrated with the high rates of COVID-19 in the US and developed the idea of Kalo the raccoon, with illustrator Katie McBride, to bring attention to the effectiveness of behavioral strategies in the fight against the virus.  Researchers from many disciplines confirm that simple behaviors such as wearing masks, hand-washing, and physical distancing will suppress the virus while laboratory scientists develop a vaccine. The sooner we take these behavioral recommendations seriously, the sooner we get back to our pre-COVID-19 lives and all the wonderful social events that we are craving.
            </p>
            <img id='kalo-transparent-bg' alt='Kalo the hero' src={kalo} />
            <p>
                Why an evidence-based cartoon raccoon?  Well, raccoons are incredibly smart with their sophisticated mammalian brains and they’re already engaging in the recommended behaviors.  They are born wearing masks (although they’re a bit high) and they often have their paws in water as they forage for food (that’s close enough to hand-washing).  So, we just need to follow the raccoons’ lead in this crisis.
            </p>
            <p>
                It is hoped that Kalo will provide a platform for an effective behavioral campaign against COVID-19 by emphasizing fundamental cognitive-behavioral principles such as incentives, self-monitoring, accountability, and a sense of agency.  Kalo welcomes collaborators and partners to support and further develop this initiative.   Working together, we can create a safer environment so our children can return to the same experiences their parents valued during their formative years.
            </p>
            <div id='signature-blcok'>
                <img id='kgl-sig' alt='Lambert signature' src={kglSig} />
                <p id='sig-date'>August 4, 2020</p>
            </div>
        </main>
    );
}