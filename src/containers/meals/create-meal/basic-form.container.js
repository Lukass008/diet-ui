// LIBS
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form/immutable'
// COMPONENTS
import BasicInfoForm from '../../../components/Meals/CreateMeal/BasicInfoForm/BasicInfoForm'
// CONSTANTS
import { INITIAL_ERRORS, CREATE_MEAL_FORM } from '../../../constants/create-meal.constants'
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
    errors.mealName = INITIAL_ERRORS.BASIC_NAME
  }

  return errors
}

export default reduxForm({
  form: CREATE_MEAL_FORM,
  destroyOnUnmount: false,
  validate
})(connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfoForm))
