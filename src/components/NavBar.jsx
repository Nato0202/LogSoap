import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/about">Sobre Nós</Link></li>
        <li><Link to="/product">Produto</Link></li>
        <li><Link to="/team">Equipe</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
