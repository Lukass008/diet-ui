// LIBS
import { connect } from 'react-redux'
import CreateMeal from '../../../components/Meals/CreateMeal/CreateMeal'
// ACTIONS
import { createMealAction } from '../../../actions/meals/create-meal/create-meal.action'
// SELECTORS
import { isFormValidSelector } from '../../../selectors/create-meal.selectors'

function mapStateToProps (state) {
  return {
    isFormValid: isFormValidSelector(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createMeal (mealDetails) {
      dispatch(createMealAction(mealDetails))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMeal)
