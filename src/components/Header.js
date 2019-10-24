import React from 'react'
import Logo from '../logo.png'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="header_CM">
      <Link to="/"> Go back </Link>
      <img className="header_CM__img" src={Logo} alt="Logo"/>
    </header>
  )
}

export default Header