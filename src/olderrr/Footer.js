import React from 'react'

const Footer = () => {
    let date = new Date();
    return (
        <div>
            <footer id="footer" className="footer ">
                <span className="ra">Copyright &copy; Naresh Bazidpuria {date.getFullYear()} All Rights Reserved</span>
            </footer>
        </div>
    )
}

export default Footer