import React from 'react'

const Projects = (props) => {
    const { url, imgSrc, name, cls, content } = props
    return (
        <div className='prCardBody'>
            <div className={`prCard ${cls}`} data-aos={`fade-${cls}`}>
                <img id='nChatLogo' src={imgSrc} alt='' />
                <div>
                    <div className='mph1'>{name}</div>
                    <p style={{'width':'20rem','margin':'0 40px','fontSize': '20px'}}>{content} <br /><a className='goBtn' href={url} target='_blank' rel="noreferrer" >Go</a></p>
                </div>
            </div>
        </div>
    )
}

export default Projects