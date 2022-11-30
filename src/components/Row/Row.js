import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  classNames: PropTypes.string,
  styles: PropTypes.object
}

const defaultProps = {
  classNames: '',
  styles: {}
}
const Row = ({ children, classNames, styles }) => (
  <div className={`row ${classNames}`} style={styles}>
    {children}
  </div>
)

Row.propTypes = propTypes
Row.defaultProps = defaultProps
export default Row
