import React, { useState } from 'react';
import './style.css';
import menuBtnO from '../../img/munu-o.png';
import menuBtnC from '../../img/munu-c.png';
import { Button, Menu, Tooltip } from 'antd';
import Home from '../homE';
import Footer from '../footeR';
import ContactUs from '../contactUs';
import Navbar from '../navigationBar';
import About from '../abouT';
import Projects from '../projectS';
import Skills from '../skillS';
function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const styleObj = {
  fontSize: '1.7rem',
  margin: '0 1.3rem 0 -.2rem',
  paddingTop: '.2rem'
}
const items = [
  getItem('HOME', '#home', <ion-icon name="home-outline" style={styleObj}></ion-icon>),
  getItem('ABOUT', '#about', <ion-icon name="person-outline" style={styleObj}></ion-icon>),
  getItem('PROJECTS', '#projects', <ion-icon name="laptop-outline" style={styleObj}></ion-icon>),
  getItem('SKILLS', '#skills', <ion-icon name="construct-outline" style={styleObj}></ion-icon>),
  getItem('CONTACT US', '#contactUs', <ion-icon name="mail-outline" style={styleObj}></ion-icon>),
];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('#home');
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navigate = (e) => {
    let a = document.createElement('a')
    a.setAttribute('href', e.key)
    a.click()
  };
  return (
    <>
      <Navbar width={collapsed ? '78px' : '254px'} />
      <div className='sidebar'>
        <Tooltip title="Menu">
          <Button
            type="primary"
            onClick={toggleCollapsed}
            className='menuBtn'
          >
            {collapsed ? <img className='menuBtnIcon' src={menuBtnC} alt="" /> : <img className='menuBtnIcon' src={menuBtnO} alt="" />}
          </Button>
        </Tooltip>
        <Menu
          defaultSelectedKeys={[active]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
          className='menu'
          onClick={navigate}
        />
      </div>
      <Home width={collapsed ? '80px' : '256px'} />
      <About width={collapsed ? '80px' : '256px'} />
      <Projects width={collapsed ? '80px' : '256px'} />
      <Skills width={collapsed ? '80px' : '256px'} />
      <ContactUs width={collapsed ? '80px' : '256px'} />
      <Footer width={collapsed ? '80px' : '256px'} />
    </>
  );
};
export default Sidebar;