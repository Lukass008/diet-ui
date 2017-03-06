// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import ContainerHeader from '../ContainerHeader/ContainerHeader'
// STYLES
import './Shopping.scss'

class Shopping extends PureComponent {
  constructor() {
    super()
    this.className = bemClassname.bind(null, 'Shopping')
  }

  render() {
    return (
      <div className={this.className()}>
        <ContainerHeader title='Shopping' />
      </div>
    )
  }
}

Shopping.propTypes = {}
Shopping.defaultProps = {}

export default Shopping