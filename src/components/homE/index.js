import React from 'react'
import './style.css';

const Home = (props) => {
  return (
    <div className='home' id='home' style={{
      left: props.width,
      width: `calc(100vw - ${props.width})`
    }}
    >
     <div className="featured">
      <p>Hi, I'm a <br /> &lt; Developer /&gt;</p>
     </div>
    </div>
  )
}

export default Home
