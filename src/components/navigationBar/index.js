import React from 'react';
import './style.css';
import logo from '../../img/Favicon.png';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" id="navbar">
        <span>&lt; Naresh Bazidpuria /&gt;</span>
        <img className="logo" src={logo} alt="" />
      </nav>
    </div>
  )
}

export default Navbar