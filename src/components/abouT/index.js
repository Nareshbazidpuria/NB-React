import React from 'react'
import img1 from '../../img/slider/img1.jpg';
import './style.css';
import { Carousel } from 'antd';

const About = (props) => {
  const contentStyle = {
    height: props.width === '80px' ? '22rem' : '19rem',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div id='about' style={{
      left: props.width,
      width: `calc(100vw - ${props.width})`
    }}
    >
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src={img1} alt="" style={{
              left: props.width,
              width: `calc(100vw - ${props.width})`
            }} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={img1} alt="" style={{
              left: props.width,
              width: `calc(100vw - ${props.width})`
            }} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={img1} alt="" style={{
              left: props.width,
              width: `calc(100vw - ${props.width})`
            }} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={img1} alt="" style={{
              left: props.width,
              width: `calc(100vw - ${props.width})`
            }} />
          </h3>
        </div>
      </Carousel>
      <div id="aboutMe">
                <h1 className="abtMe">About Me</h1>
                <p className="abtMe">Hi, I'm <strong>Naresh Kumar</strong>.I'm a <strong>Developer</strong>. My strength is that I can adapt quickly to any environment. My goal is to hard work for my company, not for any position.
                </p>
                <h3 className="abtMe">Personal Information</h3>
                <table className="myInfo">
                    <tbody id="rowsCollection">
                        <tr>
                            <td>Real Name</td>
                            <td>Naresh Kumar</td>
                        </tr>
                        <tr>
                            <td>Nickname</td>
                            <td>Nesi</td>
                        </tr>
                        <tr>
                            <td>Date of Birth</td>
                            <td>20 January, 2001</td>
                        </tr>
                        <tr>
                            <td>Birth Place</td>
                            <td>Bazidpur Kattian Wali, Fazilka, Punjab</td>
                        </tr>
                        <tr>
                            <td>Nationality</td>
                            <td>Indian</td>
                        </tr>
                        <tr>
                            <td>Schooling</td>
                            <td>Meritorious School, Bathinda</td>
                        </tr>
                        <tr>
                            <td>College/University</td>
                            <td>Rayat Group of Institutions, PTU</td>
                        </tr>
                        <tr>
                            <td>Profession</td>
                            <td>MERN Stack Developer</td>
                        </tr>
                        <tr>
                            <td>Degree</td>
                            <td>B.Tech CSE</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default About