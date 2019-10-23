import React, {useState, useEffect} from 'react'
import Service from '../service'
import Item from './Item'

function Main() {
  const [data, setItems] = useState([])
  const [config, setConfig] = useState({})
  // eslint-disable-next-line
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    fetchData(config.offset + 5, config.total)
    setIsFetching(false)
  }, [isFetching])

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return
    setIsFetching(true)
  }

  function uniq(data, key) {
    let set = new Set()
    return data.filter((obj) => {
      return !set.has(obj[key]) && set.add(obj[key])
    })
  }

  const fetchData = async(offset, total)  => {
    if (offset >= total) return
    const res = await Service.getComicsByCharacter(1010338, offset),
        processedRes = await res.json(),
        newState = data.length ? [...data, ...processedRes.data.results] : processedRes.data.results

    setConfig(processedRes.data)
    setItems(uniq(newState, 'id'))
  }

  return (
    <div id="main" className="wrapper_CM">
      {data.map(item => (
        <Item key={item.id} state={item}/>
      ))}
      {isFetching && 'Fetching more list items...'}
    </div>
  )
}

export default Main