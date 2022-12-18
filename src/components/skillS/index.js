import React from 'react'
import Skill from './skilL';
import './style.css';
import ReactLogo from '../../img/react.png'
import Js from '../../img/js.png'
import Html from '../../img/html.png'
import Css from '../../img/css.png'
import Node from '../../img/node.png'
import Next from '../../img/next.png'
import Mongodb from '../../img/mongodb.svg'
import Cv from '../../img/doc/Resume.pdf'
import { Tooltip } from 'antd';

const Skills = (props) => {
  return (
    <div className='skills' id='skills' style={{
      left: props.width,
      width: `calc(100vw - ${props.width})`
    }}
    >
      <h1>Skills</h1>
      <h3>Languages :</h3>
      <div className='d-flex skillItem'>
        <Skill src={{ key: true, src: Js }} skill='JavaScript' value={91} />
        <Skill src={{ key: true, src: Node }} skill='Node Js' value={85} />
        <Skill src={{ key: true, src: ReactLogo }} skill='React Js' value={82} />
      </div>
      <div className='d-flex skillItem'>
        <Skill src={{ key: true, src: Next }} skill='Next Js' value={80} />
        <Skill src={{ key: true, src: Mongodb }} skill='MongoDB' value={87} />
        <Skill src={{ key: false, src: { Html, Css } }} skill={{ HTML: 'HTML', CSS: 'CSS' }} value={94} />
      </div>
      <h3>CV :</h3>
      <div className="cv d-flex align-items-center">
        <Tooltip title="CV">
          <ion-icon name="id-card-outline"></ion-icon>
        </Tooltip>
        <Tooltip title="Name">
          <div className='name d-flex align-items-center'>Naresh Kumar</div>
        </Tooltip>
        <div className='download d-flex align-items-center'>
          <Tooltip title="View">
            <a href={Cv} target='_blank'>
              <ion-icon name="eye-outline"></ion-icon>
            </a>
          </Tooltip>
          <Tooltip title="Download">
            <a href={Cv} download>
              <ion-icon name="arrow-down-outline"></ion-icon>
            </a>
          </Tooltip>
        </div>
      </div>


    </div>
  )
}

export default Skills
