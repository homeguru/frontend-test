import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  classNames: PropTypes.string
}
const defaultProps = {
  classNames: ''
}

const Container = ({ children, classNames }) => (
  <div className={`container-fluid ${classNames}`}>
  {children}
  </div>
)
Container.defaultProps = defaultProps
Container.propTypes = propTypes
export default Container
