// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './MealBasicInfo.scss'

class MealBasicInfo extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'MealBasicInfo')
  }

  render () {
    const { type, calories } = this.props
    return (
      <div className={this.className()}>
        <div className={this.className('single')}>
          <div className={this.className('label')}>Type of meal</div>
          <div className={this.className('type')}>{type}</div>
        </div>
        <div className={this.className('single')}>
          <div className={this.className('label')}>Energy</div>
          <div className={this.className('calories')}>{calories} kCal</div>
        </div>
      </div>
    )
  }
}

MealBasicInfo.propTypes = {
  type: PropTypes.string,
  calories: PropTypes.number
}
MealBasicInfo.defaultProps = {}

export default MealBasicInfo
