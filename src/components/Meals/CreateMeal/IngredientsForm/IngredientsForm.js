// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import SubTitle from '../../../UtilsComponents/SubTitle/SubTitle'
// STYLES
import './IngredientsForm.scss'

class IngredientsForm extends PureComponent {
  constructor() {
    super()
    this.className = bemClassname.bind(null, 'IngredientsForm')
  }

  render() {
    return (
      <div className={this.className()}>
        <SubTitle label='Type list of ingredients' />
      </div>
    )
  }
}

IngredientsForm.propTypes = {}
IngredientsForm.defaultProps = {}

export default IngredientsForm