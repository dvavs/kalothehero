import React from 'react';
import { Helmet } from 'react-helmet';

import kaloPoster from '../../assets/media/print/vacc-poster/poster-thumbs/vacc-poster_480.jpg'

export default function HelmetMetaData(props) {

    const currentUrl = 'https://www.kalothehero.com' + window.location.pathname

    const quote = props.quote || '';

    const title = props.title || 'Kalo the Hero!';

    const image = props.image || kaloPoster;

    const hashtag = props.hashtag || '#kalotheraccoon';

    const description = props.description || 'Science is our super power! Follow Kalo\'s lead to win the battle against COVID-19!'

    return (
        <Helmet>
            <title>{title}</title>
            
            <meta name='description' content={description} />

            <meta content='image/*' property='og:image:type' />

            <meta property='type' content='website' />
            <meta property='url' content={currentUrl} />
            <meta property='title' content={title} />
            <meta property='quote' content={quote} />
            <meta property='image' content={image} />

            <meta property='og:locale' content='en_US' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={title} />
            <meta property='og:quote' content={quote} />
            <meta property='og:hashtag' content={hashtag} />
            <meta property='og:image' content={image} />
            <meta property='og:url' content={currentUrl} />
            <meta property='og:site_name' content='KaloTheHero' />
            <meta property='og:description' content={description} />
        </Helmet>
    );
}