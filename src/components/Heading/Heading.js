import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node,
  classNames: PropTypes.string
}

const defaultProps = {
  tag: 'h1'
}

const Heading = ({ tag, children, classNames }) => {
  switch(tag) {
    case 'h1':
      return <h1 className={classNames}>{children}</h1>
    case 'h2':
      return <h2 className={classNames}>{children}</h2>
    case 'h3':
      return <h3 className={classNames}>{children}</h3>
    case 'h4':
      return <h4 className={classNames}>{children}</h4>
    case 'h5':
      return <h5 className={classNames}>{children}</h5>
    case 'h6':
      return <h6 className={classNames}>{children}</h6>
    default:
      return <h1 className={classNames}>{children}</h1>
  }

}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps
export default Heading
