import React from 'react'

function Details(props) {
    const state = props.location.state

    return (
      <article className={`wrapper_CM__detail detail_${state.detail.id}`}>
        <img src={state.img} alt=""/>
        <div className="header">
          <h1>{state.detail.title}</h1>
          <div className="infos">
            <span>Publicado</span>
            <p>{state.date}</p>
            <ul>
              {state.detail.creators.items.map((creator, index) => (
                <li key={index}>
                  <p>{creator.name}</p>
                  <small>{creator.role}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    )
}

export default Details