// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import ContainerHeader from '../ContainerHeader/ContainerHeader'
// STYLES
import './Meals.scss'

class Meals extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Meals')
  }

  render () {
    return (
      <div className={this.className()}>
        <ContainerHeader title='Meals' />
      </div>
    )
  }
}

Meals.propTypes = {}
Meals.defaultProps = {}

export default Meals
