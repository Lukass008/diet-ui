// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import SubTitle from '../../../UtilsComponents/SubTitle/SubTitle'
import PhotoUpload from '../PhotoUpload/PhotoUpload'
// CONSTANTS
import { INITIAL_ERRORS } from '../../../../constants/create-meal.constants'
// STYLES
import './BasicInfoForm.scss'

class BasicInfoForm extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'BasicInfoForm')
    this.form = 'basicForm'
  }

  handleNameChange (event) {
    const value = event.target.value
    const error = this.isNameInvalid(value)
    error
      ? this.props.setNameError(error)
      : this.props.removeNameError()
    this.props.changeName(value)
  }

  isNameInvalid (name) {
    if (!name || name === '') {
      return INITIAL_ERRORS.BASIC_NAME
    }
    if (name.length < 5 || name.length > 50) {
      return 'Meal name should have 5-50 letters'
    }
  }

  handleDescriptionChange (event) {
    const value = event.target.value
    const error = this.isDescriptionInvalid(value)
    error
      ? this.props.setDescriptionError(error)
      : this.props.removeDescriptionError()
    this.props.changeDescription(value)
  }

  isDescriptionInvalid (value) {
    if (typeof value !== 'string' || value.length > 10) {
      return `Description can't be longer than 200 letters`
    }
  }

  render () {
    return (
      <div>
        <SubTitle label='Basic info' />
        <div className={this.className()}>
          <div className={this.className('leftBlock')}>
            <div className={this.className('label')}>Name</div>
            <input
              type='text'
              name='name'
              value={this.props.name}
              onChange={this.handleNameChange.bind(this)}
              className={this.className('name')}
              minLength={5}
            />
            <div className={this.className('label')}>Description</div>
            <input
              type='textarea'
              className={this.className('description')}
              onChange={this.handleDescriptionChange.bind(this)}
            />
          </div>
          <div className={this.className('photo')}>
            <div className={this.className('label')}>Photo</div>
            <PhotoUpload />
          </div>
        </div>
      </div>
    )
  }
}

BasicInfoForm.propTypes = {
  isSubFormValid: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  changeName: PropTypes.func,
  setNameError: PropTypes.func,
  removeNameError: PropTypes.func,
  changeDescription: PropTypes.func,
  setDescriptionError: PropTypes.func,
  removeDescriptionError: PropTypes.func
}
BasicInfoForm.defaultProps = {}

export default BasicInfoForm
