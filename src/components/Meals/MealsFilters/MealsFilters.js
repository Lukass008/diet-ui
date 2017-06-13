// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
import { fromJS } from 'immutable'
// COMPONENTS
import BasicSelect from '../../UtilsComponents/BasicSelect/BasicSelect'
// CONSTANTS
import { mealsTypes, nutrients } from '../../../constants/meals.constants'
// STYLES
import './MealsFilters.scss'

class MealsFilters extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'MealsFilters')
  }

  render () {
    return (
      <div className={this.className()}>
        <BasicSelect label='type' itemsList={fromJS(mealsTypes)} className={this.className('type')} />
        <BasicSelect label='nutrients' itemsList={fromJS(nutrients)} className={this.className('nutrients')} />
      </div>
    )
  }
}

MealsFilters.propTypes = {}
MealsFilters.defaultProps = {}

export default MealsFilters
