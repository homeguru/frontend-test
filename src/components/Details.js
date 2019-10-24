import React from 'react'

function Details(props) {
    const state = props.location.state

    return (
      <article className={`wrapper_CM__detail detail_${state.detail.id}`}>
      <img src={state.img} alt=""/>
      <div className="infos">
        <h2>{state.detail.title}</h2>
        <span>Publish: {state.date}</span>
        <div className="creators">
          <h3>Creators</h3>
          <div className="list-creators">
            {state.detail.creators.items.map((creator, i) => (
                <span key={i}>
                  <h4>{creator.role}</h4>
                  <p>{creator.name}</p>
                </span>
              ))}
          </div>
        </div>
        <div className="characters">
        <h3>Characters</h3>
          {state.detail.characters.items.map((char, i) => (
            <p key={i}>{char.name}</p>
          ))}
        </div>
      </div>
    </article>
    )
}

export default Details