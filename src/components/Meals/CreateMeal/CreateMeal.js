// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import BasicInfoForm from './BasicInfoForm/BasicInfoForm'
// STYLES
import './CreateMeal.scss'

class CreateMeal extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'CreateMeal')
  }

  createMeal () {
    this.refs.basicForm.getWrappedInstance().handleSubmit()
    this.props.createMeal()
  }

  render () {
    return (
      <div className={this.className()}>
        <BasicInfoForm ref='basicForm' validateInput={this.props.validateInput} />
        <button className={this.className('saveBtn')} onClick={this.createMeal.bind(this)}>
          Create
        </button>
      </div>
    )
  }
}

CreateMeal.propTypes = {
  createMeal: PropTypes.func,
  validateInput: PropTypes.func
}
CreateMeal.defaultProps = {}

export default CreateMeal
