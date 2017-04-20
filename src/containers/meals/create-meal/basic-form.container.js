// LIBS
import { connect } from 'react-redux'
import BasicInfoForm from '../../../components/Meals/CreateMeal/BasicInfoForm/BasicInfoForm'
// ACTIONS
import {
  setBasicNameValue,
  setBasicNameError,
  removeBasicNameError,
  setBasicDescriptionValue,
  setBasicDescriptionError,
  removeBasicDescriptionError
} from '../../../ducks/create-meal.duck'
// SELECTORS
import { validateBasicForm, getBasicName, getBasicDescription } from '../../../selectors/create-meal.selectors'

function mapStateToProps (state) {
  return {
    isSubFormValid: validateBasicForm(state),
    name: getBasicName(state),
    description: getBasicDescription(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeName (name) {
      dispatch(setBasicNameValue(name))
    },
    setNameError (error) {
      dispatch(setBasicNameError(error))
    },
    removeNameError () {
      dispatch(removeBasicNameError())
    },
    changeDescription (name) {
      dispatch(setBasicDescriptionValue(name))
    },
    setDescriptionError (error) {
      dispatch(setBasicDescriptionError(error))
    },
    removeDescriptionError () {
      dispatch(removeBasicDescriptionError())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfoForm)
