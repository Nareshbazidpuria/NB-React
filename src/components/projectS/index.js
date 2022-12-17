import React from 'react'
import './style.css';
import ProjectItem from './projectItem';
import l2 from '../../img/2.png';
import l1 from '../../img/1.png';
import l3 from '../../img/3.ico';

const Projects = (props) => {
  const { width } = props
  return (
    <div id='projects' style={{
      left: width,
      width: `calc(100vw - ${width})`
    }}
    >
      <div id='Project' className='pageSec'>
        <h1 className='prh1'>Projects</h1>
        <ProjectItem url='https://chat-nareshbazidpuria.herokuapp.com/' width={width} name="Let's Chat" cls='right' imgSrc={l2} content="Web Chat Application : Send and receive messages to multiple users. It also supports photos. 'nkchat' is temporary password to login." />
        <ProjectItem url='https://nareshbazidpuria-spotify.herokuapp.com/' width={width} name='NB Spotify' cls='left' imgSrc={l1} content="It's a online music player with some limited songs in it. It's cloned from Spotify but it's  quite different ." />
        <ProjectItem url='https://snake-game-nareshbazidpuria.herokuapp.com/' width={width} name="Ultra Snake" cls='right' imgSrc={l3} content="It's a normal Snake Game for children with three levels. Make your own high score in it." />
      </div>
    </div>
  )
}

export default Projects