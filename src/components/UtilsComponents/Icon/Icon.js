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
      <div>
        <svg xmlns={xmlns}
          viewBox={viewBox}
          width={width}
          height={height}
          dangerouslySetInnerHTML={{__html: content}}
         />
      </div>
    )
  }
}

Icon.propTypes = {
  svgIcon: PropTypes.object.isRequired
}
Icon.defaultProps = {}

export default Icon
