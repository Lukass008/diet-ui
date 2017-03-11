// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './CreateMeal.scss'

class CreateMeal extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'CreateMeal')
  }

  render () {
    return (
      <div className={this.className()}>CreateMeal</div>
    )
  }
}

CreateMeal.propTypes = {}
CreateMeal.defaultProps = {}

export default CreateMeal
