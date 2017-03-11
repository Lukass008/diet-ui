// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './MealsList.scss'

class MealsList extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'MealsList')
  }

  render () {
    return (
      <div className={this.className()}>MealsList</div>
    )
  }
}

MealsList.propTypes = {}
MealsList.defaultProps = {}

export default MealsList
