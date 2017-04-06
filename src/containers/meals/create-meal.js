// LIBS
import { connect } from 'react-redux'
import CreateMeal from '../../components/Meals/CreateMeal/CreateMeal'
// ACTIONS
import { createMealAction } from '../../actions/meals/create-meal.action'
import { validateInput } from '../../ducks/create-meal.duck'
// SELECTORS

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    createMeal (mealDetails) {
      dispatch(createMealAction(mealDetails))
    },
    validateInput (params) {
      dispatch(validateInput(params))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMeal)
