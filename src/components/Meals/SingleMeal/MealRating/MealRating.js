// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import Icon from '../../../UtilsComponents/Icon/Icon'
// RESOURCES
import starIcon from '../../../../assets/icons/star.svg'
// STYLES
import './MealRating.scss'

class MealRating extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'MealRating')
  }

  renderStars () {
    const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const stars = rates.map((rate) => {
      return <div className={this.className('star')} onClick={this.rateMeal(rate)} key={rate}>
        <Icon svgIcon={starIcon} />
      </div>
    })
    return <div className={this.className('stars')}>
      {stars}
    </div>
  }

  rateMeal (rate) {
    // TODO: create rating logic
  }

  render () {
    const rating = this.renderStars()
    return (
      <div className={this.className()}>
        <div className={this.className('label')}>Rate Meal</div>
        {rating}
        <div className={this.className('label')}>Rating</div>
        <div className={this.className('value')}>
          0,00
          <span className={this.className('rates')}> (0 rates)</span>
        </div>
      </div>
    )
  }
}

MealRating.propTypes = {}
MealRating.defaultProps = {}

export default MealRating
