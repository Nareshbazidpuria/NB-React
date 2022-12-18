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
          <table>
            <tbody>
              <tr>
                <td>Profession :</td>
                <td>&lt; Developer /&gt;</td>
              </tr>
              <tr>
                <td>Education :</td>
                <td> B.Tech CSE</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>nareshbazipuria.com@gmail.com</td>
              </tr>
              <tr>
                <td>DOB :</td>
                <td>20 January, 2001</td>
              </tr>
              <tr>
                <td>Contact :</td>
                <td>+916239197795</td>
              </tr>
              <tr>
                <td>Linkedin :</td>
                <td>
                  <Tooltip title="Visit">
                    <a target='_blank' href="https://www.linkedin.com/in/naresh-bazidpuria-a8a45a1a2/">Naresh Bazidpuria</a>
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  )
}

export default Navbar