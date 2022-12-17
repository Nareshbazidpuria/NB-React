import React from 'react'
import s1 from '../img/slider/f4.jpg';
import s2 from '../img/slider/Landscape-Color.jpg';
import s3 from '../img/slider/th3.jpg';
import s4 from '../img/slider/SE2.jpg';

const About = () => {
    return (
        <div id='About' className='pageSec'>
            <div id="sliderrrr" className='my-4'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={s1} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={s2} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={s3} className="d-block w-100" alt="." />
                        </div>
                        <div className="carousel-item">
                            <img src={s4} className="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

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
                            <td>Rayat Group of Institutions</td>
                        </tr>
                        <tr>
                            <td>Profession</td>
                            <td>Web Developer</td>
                        </tr>
                        <tr>
                            <td>Degree</td>
                            <td>B.Tech CSE</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
        </div>
    )
}


export default About