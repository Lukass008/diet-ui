// LIBS
import React, { Component, PropTypes } from 'react'
import bemClassname from 'bem-classname'

// STYLES
import './Icon.scss'

class Icon extends Component {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Icon')
  }

  render () {
    const { attributes: {xmlns, viewBox, width, height}, content } = this.props.svgIcon

    return (
      <svg xmlns={xmlns}
        viewBox={viewBox}
        width={width}
        height={height}
        dangerouslySetInnerHTML={{__html: content}}
        className={this.props.className}
        onClick={() => { this.props.onClick && this.props.onClick() }}
         />
    )
  }
}

Icon.propTypes = {
  svgIcon: PropTypes.object.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}
Icon.defaultProps = {}

export default Icon
