import React from 'react';
import './style.css';
import logo from '../../img/Favicon.png';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar" id="navbar" style={{
        left: props.width,
        width: `calc(100vw - ${props.width})`
      }}
      >
        <span>&lt; Naresh Bazidpuria /&gt;</span>
        <img className="logo" src={logo} alt="" />
      </nav>
    </div>
  )
}

export default Navbar