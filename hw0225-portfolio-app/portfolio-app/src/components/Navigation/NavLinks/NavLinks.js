import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
      <ul className="row">
          <li className="col"><NavLink className='nav' to="/">Home</NavLink></li>
          <li className="col"><NavLink className='nav' to="/portfolio">Portfolio</NavLink></li>
          <li className="col"><NavLink className='nav' to="/contact">Contact</NavLink></li>
      </ul>
  )
}

export default NavLinks;