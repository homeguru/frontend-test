/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styleSheet = createStyleSheet('Loader', (theme) => ({
  loaderContainer: {
  },
}))

// eslint-disable-next-line
const ComponentName = ({ classes, visible }) => (
  <div className={classes.loaderContainer}>
    Content
  </div>
)

ComponentName.propTypes = {
  visible: PropTypes.bool,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(ComponentName)
