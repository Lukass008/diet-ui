// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './IngredientsInputs.scss'

class IngredientsInputs extends PureComponent {
  constructor() {
    super()
    this.className = bemClassname.bind(null, 'IngredientsInputs')
  }

  render() {
    return (
      <div className={this.className()}>

      </div>
    )
  }
}

IngredientsInputs.propTypes = {}
IngredientsInputs.defaultProps = {}

export default IngredientsInputs