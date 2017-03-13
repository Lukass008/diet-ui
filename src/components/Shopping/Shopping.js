// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import ContainerHeader from '../ContainerHeader/ContainerHeader'

class Shopping extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Shopping')
  }

  render () {
    return (
      <div className={this.className()}>
        <ContainerHeader title='Shopping List' />
      </div>
    )
  }
}

Shopping.propTypes = {}
Shopping.defaultProps = {}

export default Shopping
