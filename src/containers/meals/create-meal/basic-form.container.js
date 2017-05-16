// LIBS
import { connect } from 'react-redux'
import BasicInfoForm from '../../../components/Meals/CreateMeal/BasicInfoForm/BasicInfoForm'
import { reduxForm } from 'redux-form/immutable'

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {

  }
}

function validate (values) {
  const errors = {}
  if (!values.get('mealName') || values.get('mealName').length < 3) {
    errors.mealName = 'Name should contain at lest 3 letters'
  }

  return errors
}

export default reduxForm({
  form: 'createMeal',
  destroyOnUnmount: false,
  validate
})(connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfoForm))
