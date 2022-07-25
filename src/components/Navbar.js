import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import logo from '../Favicon.png';

const Navbar = () => {
    // let location = useLocation();
    return (
        <div>
            <nav className="navbar-1 position-fixed fixed-top" id="navbar-1">
                <img className="nls-1" id="logo-1" src={logo} alt="Naresh Bazidpuria" /><span id="logoname-1"
                    className="logoname-1 nlns-1">&nbsp;&nbsp;Naresh Bazidpuria&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <ul>
                    <li><a className='navOpt' href="#Home">Home</a></li>
                    <li><a className='navOpt' href="#About">About</a></li>
                    <li><a className='navOpt' href="#Project">Projects</a></li>
                    <li><a className='navOpt' href="#ContactUs">Contact Us</a></li>
                    {/* <li><Link className={`navOpt ${location.pathname === "/" ? 'active-1':''}`} to="/">Home</Link></li>
                    <li><Link className={`navOpt ${location.pathname === "/About" ? 'active-1':''}`} to="/About">About</Link></li>
                    <li><Link className={`navOpt ${location.pathname === "/Projects" ? 'active-1':''}`} to="/Projects">Projects</Link></li>
                    <li><Link className={`navOpt ${location.pathname === "/ContactUs" ? 'active-1':''}`} to="/ContactUs">Contact Us</Link></li> */}
                </ul>
                <div className="icons-1">
                    <a href="https://www.instagram.com/naresh_bazidpuria" target="_blank" rel="noreferrer"><i className="fa fa-instagram" style={{ "color": "#ff01c9" }}></i></a>
                    <a href="https://www.facebook.com/nareshbazidpuria" target="_blank" rel="noreferrer"><i className="fa fa-facebook" style={{ "color": "blue" }}
                        alt="facebook"></i></a>
                    <a href="http://api.whatsapp.com/send?phone=+917837625927&text=How can I help you ?" target="_blank" rel="noreferrer"><i
                        className="fa fa-whatsapp" style={{ "color": "#39b832" }}></i></a>
                    <a href="https://twitter.com/nareshk84936106" target="_blank" rel="noreferrer"><i className="fa fa-twitter" style={{ "color": "#1c96e9" }}></i></a>
                    <a href="https://www.youtube.com/c/NareshBazidpuria" target="_blank" rel="noreferrer"><i className="fa fa-youtube" style={{ "color": "red" }}></i></a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar