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
import '../StylesSheet/Contact.css'

function BottomBar() {
  return (
    <div className='DetailDiv'>
    <div className='ContactForm h-100'>
      <img src={TUV} className ="contactCerImag" />
      <img src={Halal} className ="contactCerImag" />
    </div>
    <div className='contantdiv'>
      <div className='contactushead d-flex justify-content-start align-item-start'>
        <h1 className='border-bottom GetInTouchHead contactContantMar'>
          GET IN TOUCH
        </h1>
      </div>
      <div className='ContactLinks '>
        <div className='CallDeatilDiiv '>
          <div className=' CallDeatilDiivFirstChild specailMar '>
            <div className='icon '>
            <BiPhoneCall />
            </div> 
            <h6 className=''>Call Us</h6> 
          </div>
          <div className='CallDeatilDiivSecondChild '>
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
        <div className='ContactDetailDiv2'>
          <div className='Contact_DetailDiv2_FisrtChild h-75 '>
          <div className='d-flex justify-content-start  align-item-center flex-row  w-100 '>
            <div className='d-flex justify-content-center  align-item-center flex-row '>
            <div className='icon  '>
              <FaMailBulk/>
            </div>
            <div>
              <h6 className=''>Email</h6>
              </div>
            </div>
            <div className=' specailMar'>
              <a href="gmgum@outlook.com">gumgum@outlook.com</a>
            </div>
          </div>
          <div className='d-flex justify-content-start topMargin align-item-center  w-100 '>
            <div className='d-flex justify-content-start align-item-center flex-row'>
            <div className='icon '>
              <GrLocation/>
            </div>
            <h6 className='mt-1'>Address</h6>
            </div>
            <div className=' specailMar'>
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
  )
}

export default BottomBar