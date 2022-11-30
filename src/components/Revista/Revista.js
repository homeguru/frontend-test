import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Revista.scss'

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.object,
  description: PropTypes.string
}

const Revista = ({ id, name, img, description, baseLink }) => (
  <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6 card-wrapper'>
    <div className='card-inner'>

	  <div className='card-img' style={{ backgroundImage: `url(${img.path}.${img.extension})` }} />
          <div className='card-description'>
            {description ?
              description
              :
              'Sem descrição'
            }
          </div>
    </div>
  </div>
)

Revista.propTypes = propTypes
export default Revista