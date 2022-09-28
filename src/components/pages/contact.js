import React from 'react'
import BackgroundPic from '../../Pics/ContactBackground.jpg'

function Contact() {
  return (
  <div className='ContactDivMain' style={{ backgroundImage: `url(${BackgroundPic})` }}> 
    <div className='ContactForm'>
        <form className='form'>
          <input placeholder='Enter Your Name' type="text"/>
          <input placeholder='Enter Email Address' type="text"/>
          <textarea>
            
          </textarea>
          <textarea>
            
          </textarea>
          <textarea>
            
          </textarea>
          <textarea>
            
          </textarea>
        </form> 
    </div>
    <div className='ContactDetails'>

    </div>
    
  </div>
  )
}

export default Contact;