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

  setImgParams(imgSet) {
    // Create a set of image sources and actual width values
    const srcSet = imgSet.map(img => {
      return `${img.imgSrc} ${img.width}w`
    }).join(', ')

    // Create the set of widths, ordered the same as the srcSet
    const sizeSet = imgSet.map(img => {
      return `(max-width: ${img.max}px) ${img.width}px`
    }).join(', ')

    // NOTE - It's important that the srcSet and sizeSet are in ascending order of width,
    // because the element will use the values from the first detected as true
    return { srcSet, sizeSet }
  }

  handleImgChange(props) {
    if (this.state.defaultImg !== props.default) {
      this.setState({
        ...this.setImgParams,
        ...props
      })
    }
  }

  state = {}

  render() {
    if (this.props.imgSet !== this.state.imgSet) {
      this.handleImgChange(this.props)
    }
    // If a link, wrap the element in an anchor
    if (this.state.isLink) {
      return (
        <div className={this.props.className} id={this.props.id}>
          <a href={this.props.target}
            alt={this.props.desc}
            rel='noopener noreferrer'
            target='_blank'
            className='fullsize-link'>
            <img alt={this.props.desc}
              src={this.state.default}
              srcSet={this.state.srcSet}
              sizes={this.state.sizeSet} />
          </a>
        </div>
      );
    }
    // If it's not a link, just return the img element itself
    else {
      return (
        <div className={this.props.className} id={this.props.id}>
          < img alt={this.props.desc}
            src={this.state.default}
            srcSet={this.state.srcSet}
            sizes={this.state.sizeSet} />
        </div>
      )
    }
  }
}

export default ResponsiveImage