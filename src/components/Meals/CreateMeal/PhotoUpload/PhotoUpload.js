// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './PhotoUpload.scss'

class PhotoUpload extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'PhotoUpload')
  }

  render () {
    return (
      <div className={this.className()} />
    )
  }
}

PhotoUpload.propTypes = {}
PhotoUpload.defaultProps = {}

export default PhotoUpload
