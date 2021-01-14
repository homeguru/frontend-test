import React, { Component } from 'react'
/*import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import SearchIcon from 'material-ui-icons/Search'
import IconButton from 'material-ui/IconButton'
import ClearIcon from 'material-ui-icons/Clear'
import { CircularProgress } from 'material-ui/Progress'
import { filterResults, clearFilter } from '../../../store/actions'*/


  const filterBarContainer = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    /*[theme.breakpoints.only('xs')]: {

    },*/
  };
  
  const searchInput = {
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.1)',
    //padding: (theme.spacing.unit / 2),
    borderRadius: 4,
    alignItems: 'center',
  };
  
  const input = {
    'border': 0,
    'backgroundColor': 'rgba(0,0,0,0)',
    //...theme.typography.body1,
    //'color': theme.palette.common.fullWhite,
    /*'&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: 'rgba(255,255,255,0.5)',
    },
    '&::-webkit-inline-placeholder': {
      color: 'rgba(255,255,255,0.5)',
    },*/
  };
  const icon = {
    width: 18,
    height: 18,
  };
  const loading = {
    color: 'white',
  };
  const button = {
    width: 'auto',
    height: 'auto',
  };
  const copyRight = {
    color: 'white',
    //marginRight: (theme.spacing.unit * 2),
  };


	class FilterBar extends Component {
	  constructor() {
		super()
		this.state = {
		  searchText: '',
		}
	  }

	  onClearPress = (event) => {
		event.preventDefault()
		this.setState({ searchText: '' }, () => {
		  this.props.clearFilter()
		})
	  }
	  
	  handleChange = (event) => {
		this.setState({ searchText: event.target.value })
	  }
	  
	  handleChangeFilter = (event) => {
		this.setState({ searchText: event.target.value })
	  }
	  
	  handleKeyPress = (event) => {
		if (event.key === 'Enter') {
		  event.preventDefault()
		  this.props.filterResults(event.target.value)
		}
	  }
	  
	  render() {
		const { classes, isSearching, filter } = this.props

		return (
		  <div style={filterBarContainer}>
			<Typography type="caption" className={classes.copyRight}>
			  Data provided by Marvel. © 2017 MARVEL
			</Typography>
			<div style={classes.searchInput}>
			  <input
				name="search"
				value={this.state.searchText}
				type="text"
				style={input}
				placeholder={'Starts with, eg. Spider'}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
			  />
			  { (!isSearching && filter) && (
				<button onClick={this.onClearPress} style={button}>clear</button>
			  ) }

			</div>
		  </div>
		)
	  }
	}

/*FilterBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isSearching: PropTypes.bool,
  // eslint-disable-next-line
  filterResults: PropTypes.func,
  clearFilter: PropTypes.func,
  filter: PropTypes.string,
}

const mapStateToProps = (state) => ({
  isSearching: state.app.characters.isSearching,
  filter: state.app.characters.filter,
})

const enhance = compose(
  withStyles(styleSheet),
  connect(mapStateToProps, { filterResults, clearFilter }),
)*/

export default enhance(FilterBar)
