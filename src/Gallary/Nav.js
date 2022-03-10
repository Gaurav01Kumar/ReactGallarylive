import React from 'react'
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <div className="mainNav">
      <nav>
      <ul>
      
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/category">Category</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li><NavLink to="/ContactUs">Contact</NavLink></li>
      </ul>
      </nav>
      </div>
    </div>
  )
}

export default Nav;
