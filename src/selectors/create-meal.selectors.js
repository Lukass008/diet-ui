import { createSelector } from 'reselect'

export const getValidationErrors = state => state.getIn(['form', 'createMeal', 'syncErrors'])
export const getFormValues = state => state.getIn(['form', 'createMeal', 'values'])

export const isFormValidSelector = createSelector(
  getValidationErrors,
  ( errors ) => {
    return errors
      ? !Object.keys(errors).length
      : true
  }
)
