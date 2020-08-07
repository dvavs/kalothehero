module.exports = {
    full: require('./kalo-poster.pdf'),
    h960w621: require('./poster-thumbs/kalo-poster-960x621.jpg'),
    h480w349: require('./poster-thumbs/kalo-poster-480x349.jpg'),
    desc: 'full Kalo challenge poster',
    imgSet: [
        {
            imgSrc: require('./poster-thumbs/kalo-poster-480x349.jpg'),
            width: 349,
            max: 720
        },
        {
            imgSrc: require('./poster-thumbs/kalo-poster-960x621.jpg'),
            width: 621,
            max: 1440
        }
    ]
}