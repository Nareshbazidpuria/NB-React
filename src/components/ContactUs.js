import React from 'react'

const onSub = (e)=>{
  e.preventDefault();
}
const ContactUs = () => {
  return (
    <div id='ContactUs' className='pageSec'>
      <div className="contContainer" data-aos="flip-up">
      <h1>Contact Us</h1>
        <form method='post' action='/'> 
          <div className="mb-3">
            <label htmlFor="Name" className="form-label"> Full Name</label>
            <input type="text" className="cusInp" id="Name" name='Name' aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="cusInp" id="email" name='email' aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="phone" className="cusInp" id="phone" name='phone' aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="feedback" className="form-label">Drop your precious comment here</label>
            <textarea className="cusInp" placeholder="Leave a comment here" name='feedback' id="feedback"></textarea>
          </div>
          <button type="submit" id="subBtnn" onClick={onSub}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs