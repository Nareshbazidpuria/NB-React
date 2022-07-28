import React from 'react'
import Projects from './Projects'

const Project = () => {
  return (
    <div id='Project' className='pageSec'>
      <h1 className='prh1'>Projects</h1>
      <Projects url='https://chat-nareshbazidpuria.herokuapp.com/' name="Let's Chat" cls='right' imgSrc='/imgs/2.png' content="Web Chat Application : Send and receive messages to multiple users. It also supports photos. 'nkchat' is temporary password to login."/>
      <Projects url='https://nareshbazidpuria-spotify.herokuapp.com/' name='NB Spotify' cls='left' imgSrc='/imgs/1.png' content="It's a online music player with some limited songs in it. It's cloned from Spotify but it's  quite different ."/>
      <Projects url='https://snake-game-nareshbazidpuria.herokuapp.com/' name="Ultra Snake" cls='right' imgSrc='/imgs/3.ico' content="It's a normal Snake Game for children with three levels. Make your own high score in it."/>
      <hr />
    </div>
  )
}

export default Project