module.exports = {
    full: require('./challenge-poster.pdf'),
    h960w621: require('./poster-thumbs/challenge-poster_960.jpg'),
    h480w349: require('./poster-thumbs/challenge-poster_480.jpg'),
    desc: 'full Kalo challenge poster',
    imgSet: [
        {
            imgSrc: this.h480w349,
            width: 349,
            max: 720
        },
        {
            imgSrc: this.h960w621,
            width: 621,
            max: 1440
        }
    ]
}