// LIBS
import { connect } from 'react-redux'
import Meals from '../../components/Meals/Meals'
// ACTIONS
import { getMealsAction } from '../../actions/meals/get-meals.action'
// SELECTORS
import { getMealsList } from '../../selectors/meals.selectors'

function mapStateToProps (state) {
  return {
    mealsList: getMealsList(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getMeals () {
      dispatch(getMealsAction())
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Meals)
