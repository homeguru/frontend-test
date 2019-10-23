import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import { useIntersectionObserver } from "../useIntersectionObserver"

function Item(props) {
  const prop = props.state,
        imageUri = `${prop.images[0] && prop.images[0].path}/portrait_fantastic.jpg` || 'https://via.placeholder.com/174x254',
        date = moment(prop.dates.filter( i => i.type === "onsaleDate" )[0].date ).format('DD/MM/YYYY')

  const elementRef = useRef(null)
  const [inView] = useIntersectionObserver(elementRef, {
    threshold: 0
  })

  useEffect(() => {}, [inView])

  return (
    <Link to={{
      pathname: `/detail/${prop.id}`,
      state: {
        detail: prop,
        date: date,
        img: imageUri.replace('fantastic', 'uncanny') || 'https://via.placeholder.com/174x254'
      }
    }}>
      <article className={`item item_asd CM__${prop.id}`} ref={elementRef}>
        {inView && <img src={imageUri} alt='imagem'/>}
        <h4>{prop.title}</h4>
        <span className="item time">
          {date}
        </span>
      </article>
    </Link>
  )
}

export default Item