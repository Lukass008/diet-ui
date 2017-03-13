// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
import immutablePropTypes from 'react-immutable-proptypes'
// COMPONENTES
import MealsTitle from './MealTitle/MealTitle'
import MealBasicinfo from './MealBasicInfo/MealBasicInfo'
import MealNutrients from './MealNutrients/MealNutrients'
import MealRating from './MealRating/MealRating'
// STYLES
import './SingleMeal.scss'

class SingleMeal extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'SingleMeal')
  }

  render () {
    const meal = this.props.mealData
    const photo = meal.get('media').get('photoUrl')
    const title = meal.get('name')
    const nutrients = meal.get('nutrients')
    const type = meal.get('type')
    const calories = meal.get('calories')

    return (
      <div className={this.className()}>
        <div className={this.className('photoWrapper')}>
          <img src={photo} className={this.className('photo')} />
        </div>
        <div className={this.className('mealInfo')}>
          <MealsTitle title={title} />
          <div className={this.className('info')}>
            <MealBasicinfo type={type} calories={calories} />
            <MealNutrients data={nutrients} />
            <MealRating />
          </div>
        </div>
      </div>
    )
  }
}

SingleMeal.propTypes = {
  mealData: immutablePropTypes.map
}
SingleMeal.defaultProps = {}

export default SingleMeal
