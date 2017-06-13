// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
import { Field } from 'redux-form/immutable'
// COMPONENTS
import SubTitle from '../../../UtilsComponents/SubTitle/SubTitle'
import PhotoUpload from '../PhotoUpload/PhotoUpload'
import Input from '../../../UtilsComponents/Input/Input'
import Textarea from '../../../UtilsComponents/Textarea/Textarea'
// STYLES
import './BasicInfoForm.scss'

class BasicInfoForm extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'BasicInfoForm')
  }

  render () {
    return (
      <div>
        <SubTitle label='Basic info' />
        <div className={this.className()}>
          <div className={this.className('leftBlock')}>
            <div className={this.className('label')}>Name</div>
            <Field
              component={Input}
              name='mealName'
            />
            <div className={this.className('label')}>Description</div>
            <Field
              component={Textarea}
              name='mealDescription'
              style={{height: 135}}
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

}
BasicInfoForm.defaultProps = {}

export default BasicInfoForm
