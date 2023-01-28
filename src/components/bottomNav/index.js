import React from 'react'
import './style.css';

const BottomNav = () => {
  return (
    <div className='bottomNav'>
      <a href='#home' className="bottomHome"><ion-icon name="home-outline"></ion-icon></a>
      <a href='#about' className="bottomAbout"><ion-icon name="person-outline"></ion-icon></a>
      <a href='#projects' className="bottomProjects"><ion-icon name="laptop-outline"></ion-icon></a>
      <a href='#skills' className="bottomSkills"><ion-icon name="construct-outline"></ion-icon></a>
      <a href='#contactUs' className="bottomContactUs"><ion-icon name="mail-outline"></ion-icon></a>
    </div>
  )
}

export default BottomNav