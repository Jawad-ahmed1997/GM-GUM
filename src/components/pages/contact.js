import React from 'react'
import BackgroundPic from '../../Pics/ContactBackground6.jpg';
import Logo from "../../Pics/logo3.png";
import {FaLinkedin,FaMailBulk } from 'react-icons/fa';
import { RiFacebookBoxFill} from 'react-icons/ri';
import { GrLocation} from 'react-icons/gr';
import { BiPhoneCall} from 'react-icons/bi';

function Contact() {
  return (
    <div className='ContactDivMain  '>
      <div className='ContactdivBack ' style={{ backgroundImage: `url(${BackgroundPic})` }}>
        <img className='NavImgLogo' src={Logo} />
        <h1 className='contactushead'>
          CONTACT US
        </h1>
      </div>
      <div className='DetailDiv d-flex justify-content-center align-item-center flex-row'>
        <div className='ContactForm h-100 p-3'>
          <form className='form-group'>
            <input className='form-control formcontrol input1 m-2' placeholder='Enter Your Name' type="text" />
            <input className='form-control formcontrol m-2' placeholder='Enter Email Address' type="text" />
            <textarea placeholder='Your Company Details' className='formcontrol form-control m-2'>

            </textarea>
            <textarea placeholder='Leave A massage' className='formcontrol form-control m-2'>

            </textarea>
            <button type='submit' className='btn btn-success m-2'>Submit</button>
          </form>
        </div>
        <div className='contantdiv d-flex justify-content-center align-item-center h-100'>
        <div>
          <h1 className='border-bottom'>
            GET IN TOUCH
          </h1>
        </div>
        <div>
         <div>
          <div className='d-flex justify-content-center align-item-center flex-row'>
            <BiPhoneCall/>
            <h3>Call Us</h3>
          </div>
          <div>
            <div>
              <h6>PTCL</h6>
              <h6>+021 32570171</h6>
            </div>
            <div>
              <h6>Muhammed Imran Shehzad</h6>
              <h6>+92 3026660073</h6>
            </div>
            <div>
              <h6>Rab Nawaz Khan</h6>
              <h6>+92 3408652374</h6>
            </div>
          </div>
         </div>
         <div></div>
        </div>
        <div></div>
        <div></div>
        </div>
      </div>


    </div>
  )
}

export default Contact;