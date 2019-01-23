import React from 'react'
import './Navbar.scss';
import logo from '../../logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="City Tour Logo" />
      <ul className="ul.nav-links">
        <li href="/" className="nav-link">
        home
        </li>
        <li href="/" className="nav-link">
        about
        </li>
        <li href="/" className="nav-link active">
        tours
        </li>
      </ul>
    </nav>
  )
}
