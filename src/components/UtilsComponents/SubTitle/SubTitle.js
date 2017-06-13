import React, { PropTypes } from 'react'
import bemClassName from 'bem-classname'
import './SubTitle.scss'

const SubTitle = ({ label }) => {
  let className = bemClassName.bind(null, 'SubTitle')
  return (
    <div className={className()}>
      <svg height='12' width='12'>
        <polygon points='0,0 0,12 12,6' />
      </svg>
      <span>{label}</span>
    </div>
  )
}

SubTitle.PropTypes = {
  label: PropTypes.string.isRequired
}

export default SubTitle
