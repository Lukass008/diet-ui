import { connect } from 'react-redux'
import { reduxForm } from 'redux-form/immutable'
// COMPONENTS
import IngredientsForm from '../../../components/Meals/CreateMeal/IngredientsForm/IngredientsForm'
// CONSTANTS
import { CREATE_MEAL_FORM } from '../../../constants/create-meal.constants'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {}
}
function validate (values) {
  const errors = {}

  return errors
}

export default reduxForm({
  form: CREATE_MEAL_FORM,
  destroyOnUnmount: false,
  validate
})(connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsForm))
