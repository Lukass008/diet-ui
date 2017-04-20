import { createSelector } from 'reselect'

export const getBasicName = state => state.get('createMeal').get('basicForm').get('name').get('value')
export const validateBasicName = state => state.get('createMeal').get('basicForm').get('name').get('valid')
export const getBasicDescription = state => state.get('createMeal').get('basicForm').get('description').get('value')
export const validateBasicDescription = state => state.get('createMeal').get('basicForm').get('description').get('valid')

export const getBasicFormValues = createSelector(
  getBasicName,
  getBasicDescription,
  ( name, description ) => {
    const result = {}
    name ? result.name = name : false
    description ? result.description = description : false
    return result
  }
)

export const validateBasicForm = createSelector(
  validateBasicName,
  validateBasicDescription,
  ( name, description ) => {
    return name && description
  }
)

export const getFormValues = createSelector(
  getBasicFormValues,
  ( basicForm ) => {
    return { basicForm }
  }
)

export const validateForm = createSelector(
  validateBasicForm,
  ( basicForm ) => {
    return basicForm
  }
)
