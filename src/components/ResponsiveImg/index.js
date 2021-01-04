import React from 'react';

import './style.css'

/**
 * Responsive image object that uses a different src based on page size at load
 * @param {!Object} props - obviously
 * @param {!string} props.desc - to be used as alt text for img (and link, if applicable)
 * @param {!string} props.default - default image to use when screen width over max specified or undetected
 * @param {?boolean} props.isLink - flag denoting whether the img should be wrapped in an anchor
 * @param {?boolean} props.target - destination for the link
 * @param {!Object[]} props.imgSet - array of images with sources, img widths, and max display widths
 * ----- NOTE: props.imgSet[] should always be ordered by img width, ascending ----
 * @param {!string} props.imgSet[i].imgSrc - src for the image
 * @param {!string} props.imgSet[i].width - actual width of the image file
 * @param {!string} props.imgSet[i].max - max viewport width for which this image should be used
 */
class ResponsiveImage extends React.Component {

  constructor(props) {
    super(props)

    this.isImgLink = props.isLink

    // Create a set of image sources and actual width values
    this.srcSet = props.imgSet.map(img => {
      return `${img.imgSrc} ${img.width}w`
    }).join(', ')

    // Create the set of widths, ordered the same as the srcSet
    this.sizeSet = props.imgSet.map(img => {
      return `(max-width: ${img.max}px) ${img.width}px`
    }).join(', ')

    // NOTE - It's important that the srcSet and sizeSet are in ascending order of width,
    // because the element will use the values from the first detected as true
  }

  state = { currentSrc: '' };

  onLoad = (event) => {
    this.setState({
      currentSrc: event.target.currentSrc
    });
  }

  render() {
    // If a link, wrap the element in an anchor
    if (this.isImgLink) {
      return (
        <div>
          <a href={this.props.target}
            alt={this.props.desc}
            rel='noopener noreferrer'
            target='_blank'
            className='fullsize-link'>
            <img alt={this.props.desc}
              src={this.props.default}
              srcSet={this.srcSet}
              sizes={this.sizeSet}
              onLoad={this.onLoad} />
          </a>
        </div>
      );
    }
    // If it's not a link, just return the img element itself
    else {
      return (
        <div>
          < img alt={this.props.desc}
            src={this.props.default}
            srcSet={this.srcSet}
            sizes={this.sizeSet}
            onLoad={this.onLoad} />
        </div>
      )
    }
  }
}

export default ResponsiveImage