// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
import immutablePropTypes from 'react-immutable-proptypes'
import { Map } from 'immutable'
// STYLES
import './MealNutrients.scss'

class MealNutrients extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'MealNutrients')
  }

  showNutrients () {
    const nutrients = this.props.data.toJS()
    const total = Object.values(nutrients).reduce((a, b) => a + b)

    return Object.keys(nutrients).map((key) => {
      return this.showSingleNutrient(key, nutrients[key], total)
    })
  }

  showSingleNutrient (name, value, total) {
    const percentage = ((value / total) * 100).toFixed(2)
    return (
      <div className={this.className('single')} key={name + value}>
        <div className={this.className('label')}>{name}</div>
        <div className={this.className('value')}>
          {value}
          <span className={this.className('percentage')}>{` (${percentage}%)`}</span>
        </div>
      </div>
    )
  }

  render () {
    const nutrients = this.showNutrients()
    return (
      <div className={this.className()}>
        {nutrients}
      </div>
    )
  }
}

MealNutrients.propTypes = {
  data: immutablePropTypes.map
}
MealNutrients.defaultProps = {
  data: Map({})
}

export default MealNutrients
