import React from 'react'
import queryString from 'query-string'
import ComicListContainer from '../../containers/ComicListContainer/ComicListContainer'

const ComicListView = ({ match, location, history }) => {
  const params = queryString.parse(location.search)
  return (
  <div>
    <ComicListContainer
      page={parseInt(params.page, 10) || 1}
      match={match}
      term={params.query || null}
      history={history}
      location={location}
    />
  </div>
  )
}

export default ComicListView


  //<div className='container-fluid'>