// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './ContainerHeader.scss'

class ContainerHeader extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'ContainerHeader')
  }

  render () {
    return (
      <div className={this.className()}>
        {this.props.title}
      </div>
    )
  }
}

ContainerHeader.propTypes = {
  title: PropTypes.string.isRequired
}
ContainerHeader.defaultProps = {}

export default ContainerHeader
