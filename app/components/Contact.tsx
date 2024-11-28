import React from 'react';
import "../css-files/contact.css"

const Contact = () => {
  return (
    <section className="contact-us">
      <h2 className="section-title">
        <span className='contact-title'>CONTACT US</span>
        
      </h2>

      <div className='contact-form'>
        <h3 className='contact-subtitle'>Feel free to contact us</h3>

        <div className='input-container'>
          
          <input type="text" placeholder=' Name' className='input-field' />
        </div>

        <div className='input-container'>
       
          <input type="text" placeholder='Email' className='input-field' />
        </div>

        <div className='input-container'>
          
          <input type="text" placeholder='Mobile No:' className='input-field' />
        </div>

        <button className='contact-button'>Send </button>
      </div>
    </section>
  )
}

export default Contact