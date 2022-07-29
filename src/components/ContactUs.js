import React from 'react';
import emailjs from 'emailjs-com';

const onSub = (e) => {
  e.preventDefault();

  document.querySelector('.thx4urfdbk').style.display = 'flex';
  document.querySelector('.navOpt').click();
  setTimeout(() => {
    document.querySelector('.thx4urfdbk').style.display = 'none';        
  }, 4900);

  emailjs.sendForm('service_j2z91ht', 'template_l1uk1sj', e.target, 'OD4pCOiLR76yUrGjo').then(res => {
    emailjs.sendForm('service_j2z91ht', 'template_sm1z9wb', e.target, 'OD4pCOiLR76yUrGjo').then(res => {
      let inputs = document.querySelectorAll('.cusInp');
      inputs.forEach(element => {
        element.value = '';
      });
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}

const ContactUs = () => {
  return (
    <div id='ContactUs' className='pageSec'>
      <div className="contContainer" data-aos="flip-up">
        <h1>Contact Us</h1>
        <form method='post' action='/' onSubmit={onSub}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label"> Full Name</label>
            <input type="text" className="cusInp" id="fullName" name='fullName' aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="cusInp" id="email" name='email' aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="phone" className="cusInp" id="phone" name='phone' aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="feedback" className="form-label">Drop Your Message Here</label>
            <textarea className="cusInp" name='feedback' id="feedback" required />
          </div>
          <button type="submit" id="subBtnn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs