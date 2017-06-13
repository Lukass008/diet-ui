// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './MealTitle.scss'

class MealTitle extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'MealTitle')
  }

  render () {
    return (
      <div className={this.className()}>{this.props.title}</div>
    )
  }
}

MealTitle.propTypes = {
  title: PropTypes.string.isRequired
}
MealTitle.defaultProps = {}

export default MealTitle
