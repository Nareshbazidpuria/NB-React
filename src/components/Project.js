import React from 'react'
import Projects from './Projects'
import l2 from '../img/2.png';
import l1 from '../img/1.png';
import l3 from '../img/3.ico';

const Project = () => {
  return (
    <div id='Project' className='pageSec'>
      <h1 className='prh1'>Projects</h1>
      <Projects url='https://chat-nareshbazidpuria.herokuapp.com/' name="Let's Chat" cls='right' imgSrc={l2} content="Web Chat Application : Send and receive messages to multiple users. It also supports photos. 'nkchat' is temporary password to login."/>
      <Projects url='https://nareshbazidpuria-spotify.herokuapp.com/' name='NB Spotify' cls='left' imgSrc={l1} content="It's a online music player with some limited songs in it. It's cloned from Spotify but it's  quite different ."/>
      <Projects url='https://snake-game-nareshbazidpuria.herokuapp.com/' name="Ultra Snake" cls='right' imgSrc={l3} content="It's a normal Snake Game for children with three levels. Make your own high score in it."/>
      <hr />
    </div>
  )
}

export default Project