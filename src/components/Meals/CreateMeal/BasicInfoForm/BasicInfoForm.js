// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import SubTitle from '../../../UtilsComponents/SubTitle/SubTitle'
import PhotoUpload from '../PhotoUpload/PhotoUpload'

// STYLES
import './BasicInfoForm.scss'

class BasicInfoForm extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'BasicInfoForm')
    this.form = 'basicForm'
    this.state = {
      name: {
        value: '',
        valid: false,
        errorMessage: 'Name is required'
      },
      description: {
        value: '',
        valid: true
      }
    }
  }

  handleChange (event) {
    this.state.name = {value: event.target.value}
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
              value={this.state.name.value}
              onChange={this.handleChange.bind(this)}
              className={this.className('name')}
              maxLength={5}
            />
            <div className={this.className('label')}>Description</div>
            <input type='textarea' className={this.className('description')} />
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
  validateInput: PropTypes.func
}
BasicInfoForm.defaultProps = {}

export default BasicInfoForm
