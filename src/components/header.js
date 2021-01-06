import React from "react"
import { Link } from 'gatsby'

export default function Header({ siteTitle }) {
  return (
    <>
      <div className="header">
        <div className="logo">
          Logo
        </div>
        <nav className="links">
          <Link to={'/'} className="link about" activeClassName="pagina-actual">About Me</Link>
          <Link to={'/resumen'} className="link" activeClassName="pagina-actual">Resume</Link>
          <Link to={'/portafolio'} className="link" activeClassName="pagina-actual">Portafolio</Link>
          <Link to={'/blog'} className="link" activeClassName="pagina-actual">Blog</Link>
          <Link to={'/contact'} className="link contact" activeClassName="pagina-actual">Contact</Link>
          
        </nav>
      </div>
    </>
  )
}
