// LIBS
import React, {PureComponent, PropTypes} from 'react'
// COMPONENTS
import {Link, IndexLink} from 'react-router'
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
    const {key, label, link, indexLink} = card
    if (indexLink) {
      return <IndexLink key={key} to={link} activeClassName={'active'}>
        <div className={this.className('card')}>
          {label}
        </div>
      </IndexLink>
    }
    return <Link to={link} key={key} activeClassName={'active'}>
      <div className={this.className('card')}>
        {label}
      </div>
    </Link>
  }

  render () {
    const cardsList = this.renderCards()
    return (
      <div className={this.className()}>
        {cardsList}
        <div className={this.className('bottomLine')} />
      </div>
    )
  }
}

CardSwitcher.propTypes = {
  cards: PropTypes.array
}
CardSwitcher.defaultProps = {}

export default CardSwitcher
