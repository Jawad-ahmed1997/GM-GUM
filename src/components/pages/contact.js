import React from 'react'
import BackgroundPic from '../../Pics/ContactBackground.jpg'

function Contact() {
  return (
  <div className='ContactDivMain' style={{ backgroundImage: `url(${BackgroundPic})` }}> 
    <div className='ContactForm'>
        <form className='form'>
          <input placeholder='Enter YOur Name' type="text"/>
          <input placeholder='Enter YOur Name' type="text"/>
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