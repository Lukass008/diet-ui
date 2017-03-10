// LIBS
import { connect } from 'react-redux'
import Meals from '../../components/Meals/Meals'
// ACTIONS
import { getMealsAction } from '../../actions/meals/get-meals.action'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    getMeals() {
      dispatch(getMealsAction())
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Meals)
