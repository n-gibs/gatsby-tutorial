import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/blog/">blog</Link>
        </li>
        <li>
          <Link to="/products/">products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;