import React from 'react'

import { Progress, Space } from 'antd';

const Skill = (props) => {
  const { value, skill, src } = props
  return (
    <div className='skill d-flex flex-column align-items-center' >
      <Space wrap>
        <Progress className='progress' type="circle" percent={value} width={ window.screen.width < 550 ? 100: 200 } strokeColor='#3b7c7c' />
      </Space>
      {src.key
        ? <div className='d-flex align-items-center'>
          <img src={src.src} alt="" />
          <span>{skill}</span>
        </div>
        : <div className='d-flex align-items-center flex-column'>
          <div className='d-flex align-items-center'>
            <img src={src.src.Html} alt="" />
            <span>{skill.HTML} /</span>
          </div>
          <div className='d-flex align-items-center'>
            <img src={src.src.Css} alt="" />
            <span>{skill.CSS}</span>
          </div>
        </div>}
    </div>
  )
}

export default Skill
