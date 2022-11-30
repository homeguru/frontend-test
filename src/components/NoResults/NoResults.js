import React from 'react'
import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Row from '../../components/Row/Row'
import Hr from '../../components/Hr/Hr'
import { Link } from 'react-router-dom'

import './NoResults.scss'

const NoResults = ({term}) => {
  return (
    <Container>
      <Heading tag={'h1'} classNames='text-danger'>No Results Found</Heading>
      <Hr />
      <Row>
        <div className='col-sm-12 text-center'>
          <Heading tag={'h3'}>
            Oh Snap. No results for "{term}" were found.
          </Heading>
          You could go back to the <Link to='/characters'>Characters</Link> page,
          or try a search for another character, like <Link to='/characters?query=hulk'>Hulk</Link>, <Link to='/characters?query=captain'>Captain</Link>, or <Link to='/characters?query=doctor'>Doctor</Link>. <br />Or search for a <Link to='/comics'>comic</Link> or <Link to='/series'>series</Link>.
        </div>
      </Row>
    </Container>
  )
}

export default NoResults
