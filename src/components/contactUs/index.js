import React from 'react';
import './style.css';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const onSub = (e) => {
  e.preventDefault();
  toast.success("Thanks for contacting us, We'll reply soon.", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }); 
  emailjs.sendForm('service_j2z91ht', 'template_l1uk1sj', e.target, 'OD4pCOiLR76yUrGjo').then(res => {
    emailjs.sendForm('service_j2z91ht', 'template_sm1z9wb', e.target, 'OD4pCOiLR76yUrGjo').then(res => {
      let inputs = document.querySelectorAll('.cusInp');
      inputs.forEach(element => {
        element.value = '';
      });
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}

const ContactUs = (props) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id='contactUs' className='pageSec' style={{
        left: props.width,
        width: `calc(100vw - ${props.width})`
      }}
      >
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
              <input type="number" className="cusInp" id="phone" name='phone' aria-describedby="emailHelp" minLength={10} required />
            </div>
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">Drop Your Message Here</label>
              <textarea className="cusInp" name='feedback' id="feedback" required />
            </div>
            <button type="submit" id="subBtnn">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs