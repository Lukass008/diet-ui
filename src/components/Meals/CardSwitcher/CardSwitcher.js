// LIBS
import React, { PureComponent, PropTypes } from 'react'
import immutablePropTypes from 'react-immutable-proptypes'
import bemClassname from 'bem-classname'
// STYLES
import './CardSwitcher.scss'

class CardSwitcher extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'CardSwitcher')
  }

  renderCards (cards) {

  }

  render () {
    const cards = this.props.cards.toJS()
    const cardsList = this.renderCards(cards)
    return (
      <div className={this.className()}>
        {cardsList}
      </div>
    )
  }
}

CardSwitcher.propTypes = {
  cards: immutablePropTypes.list
}
CardSwitcher.defaultProps = {}

export default CardSwitcher
