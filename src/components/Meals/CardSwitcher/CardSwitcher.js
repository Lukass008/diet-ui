// LIBS
import React, {PureComponent, PropTypes} from 'react'
// COMPONENTS
import {Link} from 'react-router'
import bemClassname from 'bem-classname'
// STYLES
import './CardSwitcher.scss'

class CardSwitcher extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'CardSwitcher')
  }

  renderCards () {
    const cards = this.props.cards
    return cards.map((card) => {
      return this.createCardItem(card)
    })
  }

  createCardItem (card) {
    const {key, label, link} = card

    return <Link to={link} key={key}>
      <div className={this.className('card')}>
        {label}
      </div>
    </Link>
  }

  render () {
    console.log('this.props', this.props)
    const cardsList = this.renderCards()
    return (
      <div className={this.className()}>
        {cardsList}
      </div>
    )
  }
}

CardSwitcher.propTypes = {
  cards: PropTypes.array
}
CardSwitcher.defaultProps = {}

export default CardSwitcher
