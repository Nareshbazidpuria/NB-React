import React from 'react'
import './style.css';

const Footer = (props) => {
  return (
    <div className='footer' style={{
      left: props.width,
      width: `calc(100vw - ${props.width})`
    }}
    >
      <div>
      <span>Naresh Bazidpuria</span>
      <div>MERN Stack Developer</div>
      </div>
      <div className="social d-flex flex-column align-items-center">
        <h5>Social Links</h5>
       <div className="links">
       <a href="https://www.instagram.com/naresh_bazidpuria" target="_blank" rel="noreferrer"><i className="fa fa-instagram" ></i></a>
        <a href="https://www.facebook.com/nareshbazidpuria" target="_blank" rel="noreferrer"><i className="fa fa-facebook" alt="facebook"></i></a>
        <a href="http://api.whatsapp.com/send?phone=+917837625927&text=How can I help you ?" target="_blank" rel="noreferrer"><i
          className="fa fa-whatsapp" ></i></a>
        <a href="https://twitter.com/nareshk84936106" target="_blank" rel="noreferrer"><i className="fa fa-twitter" ></i></a>
        <a href="https://www.youtube.com/c/NareshBazidpuria" target="_blank" rel="noreferrer"><i className="fa fa-youtube" ></i></a>
        <a href='mailto:nareshbazidpuria.com@gmail.com'><i className="fa fa-envelope" ></i></a>
       </div>
      </div>
      <div className="copyright">
        <div>Copyright &copy; {new Date().getFullYear()} Naresh Bazidpuria</div>
        <div>All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer