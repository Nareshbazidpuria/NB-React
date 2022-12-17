import React from 'react'

const ProjectItem = (props) => {
    const { url, imgSrc, name, cls, content, width } = props
    return (
        <div className='prCardBody'>
            <div className={`prCard ${cls}`} data-aos={`fade-${cls}`} style={{
                right: cls === 'left' ? `calc(-34rem + ${width})` : '',
            }}
            >
                <img id='nChatLogo' src={imgSrc} alt='' />
                <div>
                    <div className='mph1'>{name}</div>
                    <p style={{ 'width': '20rem', 'margin': '0 40px', 'fontSize': '20px' }}>{content + '( under maintenance !)'} <br /><a className='goBtn' href='/' target='_blank' rel="noreferrer" >Temporary Unavailable</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
