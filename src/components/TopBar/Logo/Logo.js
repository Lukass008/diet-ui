// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
import { Link } from 'react-router'
// STYLES
import './Logo.scss'

class Logo extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Logo')
  }

  render () {
    return (
      <Link to='/dashboard'>
        <div className={this.className()}>Diet App</div>
      </Link>
    )
  }
}

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
