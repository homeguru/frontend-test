import React from 'react'
import Logo from '../logo.png'

function Header() {
  return (
    <header className="header_CM">
      <a href="/"> Voltar </a>
      <img className="header_CM__img" src={Logo} alt="Logo"/>
    </header>
  )
}

export default Header