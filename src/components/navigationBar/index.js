import React, { useState } from 'react';
import './style.css';
import logo from '../../img/Favicon.png';
import { Tooltip, Modal } from 'antd';

const Navbar = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="navbar" id="navbar" style={{
        left: props.width,
        width: `calc(100vw - ${props.width})`
      }}>
        <Tooltip title="Profile">
          <span onClick={showModal}>&lt; Naresh Bazidpuria /&gt;</span>
        </Tooltip>
        <Tooltip title="Profile">
          <img className="logo" src={logo} alt="" onClick={showModal} />
        </Tooltip>
      </nav>
      <Modal className='profileModel d-flex' open={isModalOpen} onCancel={handleCancel}>
        <img className="profilePic" src={logo} alt="" />
        <h4>Naresh Bazidpuria</h4>
        <div className='info'>
          <p><strong>Profession:</strong> &lt; Developer /&gt;</p>
          <p><strong>Education:</strong> B.Tech CSE</p>
          <p><strong>Email:</strong> nareshbazipuria.com@gmail.com</p>
          <p><strong>DOB:</strong> 20 January, 2001</p>
          <p><strong>Contact:</strong> +916239197795</p>
          <p><strong>Linkedin:</strong> <a target='_blank' href="https://www.linkedin.com/in/naresh-bazidpuria-a8a45a1a2/">Naresh Bazidpuria</a></p>
        </div>
      </Modal>
    </div>
  )
}

export default Navbar