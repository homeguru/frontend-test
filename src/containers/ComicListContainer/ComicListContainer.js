import React, { Component } from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import { fetchObjects } from '../../utils/marvelAPI'
import Revista from '../../components/Revista/Revista'
import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'
import NoResults from '../../components/NoResults/NoResults'

const propTypes = {
  page: PropTypes.number,
  term: PropTypes.string
}

const defaultProps = {
  page: 1
}

class ComicListContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      comics: [],
      limit: 200,
      inputTerm: undefined
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
    this.handleFetch(nextProps.page, nextProps.term)
  }

  componentWillMount() {
    this.handleFetch(this.props.page, this.props.term)
  }

  handlePageChange(pageNumber) {
	  // eslint-disable-next-line no-restricted-globals
    const parsed = queryString.parse(location.search)
    parsed.page = pageNumber
    this.props.history.push(`?${queryString.stringify(parsed)}`)
  }

  handleChange(event) {
    this.setState({inputTerm: event.target.value})
  }

  handleSubmit(event) {
   event.preventDefault();
   this.props.history.push(`?query=${this.state.inputTerm}`)
 }

  handleFetch(page, term) {
    const LIMIT = 200
    const defaultOptions = {offset: (LIMIT * (page - 1)), orderBy: 'title'}
    const searchOption = term ? { titleStartsWith: term} : null
    let mergedOptions = Object.assign(defaultOptions, searchOption)
    this.setState( { loading: true })
	
	//fetch all comics
    fetchObjects('comics', mergedOptions)
    .then(res => {

		console.log("DADOS LIDOS");
		console.log(res.data.results);
		this.setState(
		{
		  comics: res.data.results,
		  offset: res.data.offset,
		  limit: res.data.limit,
		  total: res.data.total,
		  count: res.data.count,
		  loading: false,
		}
	
	)
	
	})

  }

  render() {

    const {comics, loading } = this.state
    if (this.state.total === 0) {
      return <NoResults term={this.props.term} />
    }
	
	console.log("comics");
	console.log(comics);

    return (
      <Container>
		
        <Row>
          {loading}
          {comics.map(({id, title, thumbnail, description}, i) => (
            <Revista
              key={i}
              id={id}
              name={title}
              img={thumbnail}
              description={description}
              baseLink={'/comics'}
            />
          ))}
        </Row>

      </Container>
    )
  }
}

ComicListContainer.propTypes = propTypes
ComicListContainer.defaultProps = defaultProps
export default ComicListContainer
