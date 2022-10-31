import React from 'react'
import BackgroundPic from '../../Pics/ContactBackground6.jpg';
import TUV from '../../Pics/TuvAstria.jpg';
import Halal from '../../Pics/halaalLogo.png';
import Logo from "../../Pics/logo3.png";
import {FaLinkedin,FaMailBulk } from 'react-icons/fa';
import { RiFacebookBoxFill} from 'react-icons/ri';
import { AiOutlineTwitter} from 'react-icons/ai';
import { GrLocation} from 'react-icons/gr';
import { BiPhoneCall} from 'react-icons/bi';
import Navbar1 from './NavBar1';

function Contact() {
  return (
    <>
    
    <div className='ContactDivMain  '>
      <div className='ContactdivBack ' style={{ backgroundImage: `url(${BackgroundPic})` }}>
        <img className='NavImgLogo' src={Logo} />
        <h1 className='contactushead'>
          CONTACT US
        </h1>
      </div>
      <div className='DetailDiv d-flex justify-content-center align-item-center flex-row'>
        <div className='ContactForm h-100'>
          <img src={TUV} className ="contactCerImag" />
          <img src={Halal} className ="contactCerImag" />
        </div>
        <div className='contantdiv d-flex justify-content-center align-item-center flex-column h-100'>
          <div className='contactushead d-flex justify-content-start align-item-start'>
            <h1 className='border-bottom contactContantMar'>
              GET IN TOUCH
            </h1>
          </div>
          <div className='d-flex justify-content-center align-item-center flex-row'>
            <div className='d-flex justify-content-around align-item-center flex-row w-50 '>
              <div className=' d-flex justify-content-around align-start-center flex-row  '>
                <div className='icon '>
                <BiPhoneCall />
                </div> 
                <h6 className=''>Call Us</h6> 
              </div>
              <div className='d-flex justify-content-start align-item-center flex-column'>
                <div className='d-flex flex-row'>
                  <h6>PTCL</h6>
                  <a href="#" className='contactContantMar'>+021 32570171</a>
                </div>
                <div className='d-flex flex-row'>
                  <h6>Cell</h6>
                  <a href="#" className='contactContantMar'>+92 3026660073</a>
                </div>
                <div className='d-flex flex-row'>
                 <h6>Cell</h6>
                  <a href="#" className='contactContantMar'>+92 3408652374</a>
                </div>
              </div>
            </div>
            <div className='ContactDetailDiv2 d-flex justify-content-center align-item-center  flex-column '>
              <div className='h-75 d-flex justify-content-start  align-item-start flex-column '>
              <div className='d-flex justify-content-start  align-item-center flex-row w-100 '>
                <div className='d-flex justify-content-start  align-item-center flex-row '>
                <div className='icon '>
                  <FaMailBulk/>
                </div>
                <div>
                  <h6 className='mt-1'>Email</h6>
                  </div>
                </div>
                <div className='contactContantMar'>
                  <a href="gmgum@outlook.com">gumgum@outlook.com</a>
                </div>
              </div>
              <div className='d-flex justify-content-start  align-item-center column w-100 '>
                <div className='d-flex justify-content-start align-item-center flex-row'>
                <div className='icon '>
                  <GrLocation/>
                </div>
                <h6 className='mt-1'>Address</h6>
                </div>
                <div className='contactContantMar'>
                  <p>E-52 Pakistan Cable Chorangi<br/>Site Industrial Area Karchi <br/>Pakistan</p>
                </div>
              </div>
              </div>
              <div className=' sociallinks h-25 w-75 d-flex justify-content-center  align-item-center'>
                <a href='#'><FaLinkedin/></a>
                <a href='#'><RiFacebookBoxFill/></a>
                <a href='#'><AiOutlineTwitter/></a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    
    </>
  )
}

export default Contact;