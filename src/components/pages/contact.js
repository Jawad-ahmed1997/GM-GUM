import React from 'react'
import BackgroundPic from '../../Pics/contactus3.jpg'

function Contact() {
  return (
    <div className='ContactDivMain flex-column'>
      <div className='ContactdivBack  ' style={{ backgroundImage: `url(${BackgroundPic})` }}>
        <h1 className='contactushead'>
          Contact Us
        </h1>
      </div>
      <div className='DetailDiv d-flex justify-content-center align-item-center flex-row'>
        <div className='ContactForm  w-50 h-100'>
          <form className='form'>
            <input placeholder='Enter Your Name' type="text" />
            <input placeholder='Enter Email Address' type="text" />
            <textarea>

            </textarea>
            <textarea>

            </textarea>
          </form>
        </div>
        <div className=' w-50 h-100'>

        </div>
      </div>


    </div>
  )
}

export default Contact;